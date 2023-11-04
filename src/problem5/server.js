/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

/**!*****************************!*
 ** PUT THIS ON MAIN ENTRY FILES !
 ** WRITE RESOLVED PATH IN BOTH FILES
 ** [PACKAGE.JSON] AND [TSCONFIG.JSON]
 **!*****************************!*/
require("module-alias/register");

const bodyParser = require('body-parser');
const express = require('express');

const __APPLICATION__ = require('../../package.json');

const {HOST, PORT} = require('./config/default');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

require('./global/mysql'); // Connecting to MySQL Server.

app.use(require('./app/router')); // Load Router into Express Application.

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});

/** For Testing Purpose !*/
module.exports = app;
