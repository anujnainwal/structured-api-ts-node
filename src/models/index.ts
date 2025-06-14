import fs from "fs";
import path from "path";
import { Sequelize, Model, Dialect } from "sequelize";
import type { DB, DBModels } from "./types/types";
import dbConfig from "@/config/config";

const basename = path.basename(__filename);
const env = process.env.NODE_ENV?.toLowerCase() || "development";
const config = dbConfig[env as keyof typeof dbConfig];

const db = {} as DB;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password ?? undefined,
  {
    host: config.host,
    dialect: config.dialect as Dialect,
    port: config.port,
    logging: config.logging,
    benchmark: config.benchmark,
  }
);

// Load all model files except index and test files
const files = fs.readdirSync(__dirname).filter((file) => {
  return (
    !file.startsWith(".") &&
    file !== basename &&
    (file.endsWith(".ts") || file.endsWith(".js")) &&
    !file.includes(".test.")
  );
});

for (const file of files) {
  const modelModule = require(path.join(__dirname, file));
  const model = modelModule.default ?? modelModule;

  if (
    typeof model === "function" &&
    model.prototype instanceof Model &&
    typeof model.initialize === "function"
  ) {
    model.initialize(sequelize);
    db[model.name as keyof DBModels] = model;
    console.log(`✅ Loaded model: ${model.name}`);
  } else {
    console.warn(
      `⚠️ Skipped ${file}: Not a valid Sequelize model with initialize()`
    );
  }
}

// 🔁 Uncomment when you define associations in your models

Object.keys(db).forEach((modelName) => {
  if (db[modelName]?.associate) {
    db[modelName].associate(db);
    console.log(`🔗 Associated model: ${modelName}`);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log(
  "📦 Models registered:",
  Object.keys(db).filter((key) => key !== "sequelize" && key !== "Sequelize")
);

export default db;
