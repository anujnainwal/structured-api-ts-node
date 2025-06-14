import { Dialect } from "sequelize";

export interface DBEnvConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  dialect: Dialect;
  logging: boolean | ((sql: string, timing?: number) => void);
  benchmark?: boolean;
  retry?: {
    max: number;
  };

  pool: {
    max: number;
    min: number;
    acquire: number;
    idle: number;
  };
}

export interface DBConfig {
  development: DBEnvConfig;
  test: DBEnvConfig;
  production: DBEnvConfig;
}
