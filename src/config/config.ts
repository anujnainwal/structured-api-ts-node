import type { DBConfig } from "@/types/DatabaseConfig";
import dotenv from "dotenv";
import { Dialect } from "sequelize";

dotenv.config();

const dbConfig: DBConfig = {
  development: {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_DATABASE || "my_database",
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    dialect: "mysql",
    logging: (sql, timing) => {
      if (timing && timing > 500) {
        console.warn(`⚠️ SLOW QUERY (${timing}ms): ${sql}`);
      }
    },
    benchmark: true,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    retry: {
      max: 3,
    },
  },

  test: {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_DATABASE || "my_database",
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    dialect: "mysql",
    logging: (sql, timing) => {
      if (timing && timing > 500) {
        console.warn(`⚠️ SLOW QUERY (${timing}ms): ${sql}`);
      }
    },
    benchmark: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  },

  production: {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_DATABASE || "my_database",
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    dialect: "mysql",
    logging: (sql, timing) => {
      if (timing && timing > 500) {
        console.warn(`⚠️ SLOW QUERY (${timing}ms): ${sql}`);
      }
    },
    benchmark: true,
    pool: {
      max: 20,
      min: 5,
      acquire: 60000,
      idle: 20000,
    },
  },
};

export default dbConfig;
module.exports = dbConfig;
