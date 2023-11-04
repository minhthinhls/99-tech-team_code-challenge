/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

import Authorization from "@/middleware/authorization";

const __V1Router__ = require('express').Router();

/** Any HTTP Request firing to `/api/v1/user` required Token injected within Request Body !*/
__V1Router__.use('/user', Authorization(), require('./user'));

/** For ES6 Default Import Statement !*/
export default __V1Router__;

/** For ES5 Module Import Statement !*/
module.exports = __V1Router__;
