/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

import UserService from "@/service/user";

class UserController {

    async getUsers(req, res) {
        const userService = new UserService();

        const users = await userService.getUsers(req.body);

        return res.status(200).send({
            users: users,
        });
    }

    async getAllUser(req, res) {
        const userService = new UserService();

        const users = await userService.getAllUser();

        return res.status(200).send({
            users: users,
        });
    }

    /**
     ** @note - Validate parameters within Controllers.
     **/
    async createUser(req, res) {
        const userService = new UserService();

        try {
            await userService.createUser(req.body);
        } catch (e) {
            return res.status(400).send();
        }

        return res.status(200).send();
    }

    /**
     ** @note - Either extract body params here or passing into Service Handlers.
     **/
    async updateUser(req, res) {
        const userService = new UserService();

        try {
            await userService.updateUser(req.body);
        } catch (e) {
            return res.status(400).send();
        }

        return res.status(200).send();
    }

    async deleteUser(req, res) {
        const userService = new UserService();

        try {
            await userService.deleteUser(req.body);
        } catch (e) {
            return res.status(400).send();
        }

        return res.status(200).send();
    }

}

const __Controller__ = new UserController();

/** For ES6 Default Import Statement !*/
export default __Controller__;
