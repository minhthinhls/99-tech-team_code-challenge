/* eslint valid-jsdoc: "off", complexity: "off" */

"use strict";

/** Import Environment Dependencies !*/
import "$/dotenv.config.js";

/** Load Secret [.env] parameters here !*/
const $ENV = process.env;

/** For ES5 Module Import Statement !*/
module.exports = {

  HOST: '127.0.0.1',
  PORT: 8080,

  security: {
    csrf: false,
    /** Setup Base Whitelist Domains for Egg-Application ~!*/
    domainWhiteList: [
      '*', // TODO: Currently whitelist all feasible domains. Consider refactor on later version.
      $ENV.WHITE_LIST_DOMAIN_URL,
    ].filter(Boolean),
  },

  /** Database configuration [Required] !*/
  sequelize: {
    dialect: 'mysql',
    host: $ENV.MYSQL_HOST || '18.166.26.28',
    port: Number($ENV.MYSQL_PORT) || 3306,
    database: $ENV.MYSQL_DB || 'demo',
    username: $ENV.MYSQL_USER || '99techteam',
    password: $ENV.MYSQL_PASS || '99techteam',
    timezone: $ENV.MYSQL_TIMEZONE || '+07:00',
  },

};
