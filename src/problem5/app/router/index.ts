/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

const __EntryRouter__ = require('express').Router();

/**
 ** Add Security Middlewares here.
 ** @example __EntryRouter__.use(ProtectMiddleware);
 **/

__EntryRouter__.use('/api', require('./api'));

/** For ES6 Default Import Statement !*/
export default __EntryRouter__;

/** For ES5 Module Import Statement !*/
module.exports = __EntryRouter__;
