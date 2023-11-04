/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

import {BOOLEAN, DATE, DATEONLY, INTEGER, STRING, UUID, UUIDV4} from "sequelize";

import sequelize from "$/global/mysql";

const __Model__ = sequelize.define('user', {
    username: {
        type: STRING(50),
        allowNull: false,
        primaryKey: true,
        defaultValue: '',
    },
    password: {
        type: STRING(32),
        allowNull: false,
        defaultValue: '',
    },
    score: {
        type: INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
}, {
    timestamps: false,
    underscored: true,
});

(async () => {
    // Force Sync Model (Create/Delete/Update - Attributes/Relations) during Development Phase.
    await __Model__.sync({force: false}); // Set `force:true` will drop this table on every restart phase.
})();

/** For ES6 Default Import Statement !*/
export default __Model__;
