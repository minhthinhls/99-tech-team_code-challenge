/* eslint valid-jsdoc: "off", complexity: "off" */

"use strict";

/** Import Environment Dependencies !*/
import "$/dotenv.config.js";

const $ENV = process.env;

/** For ES5 Default Import Statement !*/
module.exports = {

  PORT: 8080,
  HOST: '127.0.0.1',

  /** Database configuration [Required] !*/
  sequelize: {
    dialect: 'mysql',
    host: $ENV.MYSQL_HOST || '127.0.0.1',
    port: Number($ENV.MYSQL_PORT) || 3306,
    database: $ENV.MYSQL_DB || '99-tech-team',
    username: $ENV.MYSQL_USER || 'staging',
    password: $ENV.MYSQL_PASS || 'password',
  },

};
