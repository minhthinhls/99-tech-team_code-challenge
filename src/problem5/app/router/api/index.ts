/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

const __ApiRouter__ = require('express').Router();

__ApiRouter__.use('/v1', require('./v1'));

/** For ES6 Default Import Statement !*/
export default __ApiRouter__;

/** For ES5 Module Import Statement !*/
module.exports = __ApiRouter__;
