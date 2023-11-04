/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

import UserController from "@/controller/user";

const __UserRouter__ = require('express').Router();

__UserRouter__.get('/', UserController.getUsers);

__UserRouter__.get('/all', UserController.getAllUser);

__UserRouter__.put('/create', UserController.createUser);

__UserRouter__.post('/update', UserController.updateUser);

__UserRouter__.delete('/delete', UserController.deleteUser);

/** For ES6 Default Import Statement !*/
export default __UserRouter__;

/** For ES5 Module Import Statement !*/
module.exports = __UserRouter__;
