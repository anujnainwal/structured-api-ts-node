import "tsconfig-paths/register";
import cluster from "cluster";
import os from "os";
import app from "./app";
import db from "@/models/index";

const PORT = process.env.PORT || 6969;
const numCPUs = os.cpus().length;
const ENV = process.env.NODE_ENV || "development";

function logPrimaryStartup() {
  console.clear();
  console.log("🧠 [SYSTEM] Initializing clustered server...");
  console.log("--------------------------------------------------");
  console.log(`🖥️  NODE_ENV          : ${ENV}`);
  console.log(`⚙️  CPU Cores Available : ${numCPUs}`);
  console.log(`🚀 Port Configured     : ${PORT}`);
  console.log("--------------------------------------------------");
  console.log("🔧 Spawning worker processes...");
}

function logWorkerStartup(pid: number) {
  console.log(`✅ Worker [PID: ${pid}] is running on http://localhost:${PORT}`);
}

if (cluster.isPrimary) {
  logPrimaryStartup();

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `❌ Worker ${worker.process.pid} exited (code: ${code}). Restarting...`
    );
    cluster.fork();
  });
} else {
  db.sequelize
    .authenticate()
    .then(() => {
      console.log(
        "\n🗄️ Database connection has been established successfully.\n"
      );

      app.listen(PORT, () => {
        logWorkerStartup(process.pid);
      });
    })
    .catch((error: Error) => {
      console.error("❌ Unable to connect to the database:");
      console.error(error.message);
    });
  app.listen(PORT, () => {
    logWorkerStartup(process.pid);
  });
}
