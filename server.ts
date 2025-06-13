import cluster from "cluster";
import os from "os";
import app from "./app";

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
  app.listen(PORT, () => {
    logWorkerStartup(process.pid);
  });
}
