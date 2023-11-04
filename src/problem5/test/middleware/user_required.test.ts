/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

/** Import Pre-Defined Types Helper !*/
import "mocha";

/** Import ES6 Default Dependencies !*/
import {expect, assert, sequelize, onReady, database, HttpRequest} from "$/test/bootstrap";

describe(`API V1 Testing`, () => {

    before(async () => {
        /** Execute tests after app is ready !*/
        return onReady();
    });

    it('Get All Users:', async () => {
        const res = await HttpRequest.get("/api/v1/user/all").send({
            /** Add Body Parameters for HTTP Request here !*/
            token: Buffer.from(`admin:password`).toString('base64'), // Random Token to bypass Authorization Parameters.
        });
        console.log('> Response Status Code:', res.status);
        assert(res.status === 200, 'Response Status: 200');
    });

    afterEach(() => {
        // Purge data for next tests.
    });

    after(async () => {

        /** @ts-ignore !*/
        // await sequelize.query(`DROP DATABASE ${database};`).then((/*data*/) => {
        //     /* [[Optional Execution Placeholder]] */
        // }).catch((error) => {
        //     return console.log(`> Database "${database}" deletion error =>`, error);
        // });

        return console.log('>>> FINISHED UNIT TEST');
    });
});
