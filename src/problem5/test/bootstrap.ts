/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

/** Import ES6 Module Dependencies !*/
import * as chai from "chai";

/** Import ES6 Module Dependencies !*/
import * as chaiSubset from "chai-subset";

/** Import ES6 Default Dependencies !*/
import chaiHttp from "chai-http";

/** Import ES6 Default Dependencies !*/
import {Sequelize} from "sequelize";

/** @ts-ignore - Load Chai Subset Comparison to Assertion Library !*/
chai.use(chaiSubset);
// chai.use(chaiHttp); // Mocha-Hooks Not working with Chai HTTP.
chai.should();

/**
 ** - For detail purpose of using Chai Subset Middleware. Please refer to the following articles:
 ** @see {@link https://github.com/visionmedia/supertest/issues/628/}
 ** @see {@link https://stackoverflow.com/questions/62547335/mocha-chai-deep-include-an-array-of-objects-but-only-have-part-of-expected-obj/}
 ** @see {@link https://www.chaijs.com/plugins/chai-subset/}
 ** @see {@link https://www.npmjs.com/package/chai-subset/}
 **/
import {expect, assert} from "chai";

/** Testing while server been turned off !*/
const HttpRequest = require("supertest")(require('$/server'));

/** Testing while server already online !*/
// const HttpRequest = require("supertest")("localhost:8080");

const __DBConfig__ = require('$/config/default').sequelize;

/**
 ** @notes - Consider moving unit_test to this database in the future patches.
 **/
const database = "unit_test";

/**
 ** @description - Create a new database connection via built-in Sequelize Method.
 ** @see {@link https://stackoverflow.com/questions/41258500/how-to-create-mysql-database-with-sequelize-nodejs/}
 **/
const sequelize = new Sequelize("", __DBConfig__.username, __DBConfig__.password, {
    host: __DBConfig__.host,
    dialect: __DBConfig__.dialect,
    logging: true,
});

/**
 ** - Create hook to force all Unit Test wait for this resolved Ready Promise.
 ** @returns {Promise<void>}
 **/
const onReady = async (): Promise<void> => {

    /** @ts-ignore !*/
    // await sequelize.query(`CREATE DATABASE ${database};`).then((/*data*/) => {
    //     /* [[Optional Execution Placeholder]] */
    // }).catch((error) => {
    //     return console.log(`> Database "${database}" creation error =>`, error);
    // });

    /** Load all database Schema/Tables here !*/

    return Promise.all([/* Extra pre-executions await here !*/]).then(() => void 0);
};

/**
 ** Clean database after Unit Test Process Finished.
 **/
process.on('exit', async () => {
    return console.log('>>> ON PROCESS EXIT');
});

export {expect, assert, sequelize, onReady, database, HttpRequest};
