/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

const {Sequelize} = require('sequelize');

const __DBConfig__ = require('$/config/default').sequelize;

/**
 ** @description - Create a new database connection via built-in Sequelize Method.
 ** @see {@link https://stackoverflow.com/questions/41258500/how-to-create-mysql-database-with-sequelize-nodejs/}
 **/
const sequelize = new Sequelize(__DBConfig__.database, __DBConfig__.username, __DBConfig__.password, {
    host: __DBConfig__.host,
    dialect: __DBConfig__.dialect,
});

/**
 ** Immediately connecting to MySQL Database via Module Import.
 **/
(async () => {
    await sequelize.authenticate();
    return console.log("Finished connecting to MySQL Server!");
})();

/** For ES6 Default Import Statement !*/
export default sequelize;
