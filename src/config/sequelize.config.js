require("ts-node").register(); // Compile TS on the fly
const config = require("./config.ts"); // Import your config filecle
const env = process.env.NODE_ENV || "development";
module.exports = config[env];
