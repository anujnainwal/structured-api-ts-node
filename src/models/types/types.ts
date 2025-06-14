import { Sequelize, Model, ModelStatic } from "sequelize";

export interface ModelWithInit extends ModelStatic<Model> {
  initialize: (sequelize: Sequelize) => void;
  associate?: (models: DBModels) => void;
}

// Only actual models go here
export interface DBModels {
  [modelName: string]: ModelWithInit;
}

// Extended interface for Sequelize instance + models
export interface DB {
  models: DBModels;
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
}
