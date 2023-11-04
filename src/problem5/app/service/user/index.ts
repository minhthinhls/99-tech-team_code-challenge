/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

import sequelize from "$/global/mysql";
import UserModel from "@/model/user";
import {Op} from "sequelize";

const {Transaction: {ISOLATION_LEVELS}} = require('sequelize');

export default class UserService {

    constructor() {
        // Implementing later.
    }

    /**
     ** @note - Add paging features in the further patches.
     **/
    async getAllUser() {
        return UserModel.findAll({
            raw: true,
            attributes: {
                exclude: ['password'],
            },
        });
    }

    /**
     ** @note - Get Users with basic filters. Fall back on default filters for demo-purpose.
     **/
    async getUsers(body) {
        const filter = body.filter || {};

        return UserModel.findAll({
            raw: true,
            where: {
                score: filter.score || {[Op.gte]: 5},
                ...filter, // Safe filters from Clients here.
            },
            attributes: {
                exclude: ['password'],
            },
        });
    }

    async createUser(body) {
        const {username, password} = body;

        if (!username || !password) {
            throw new Error("Invalid Arguments");
        }

        await UserModel.create({
            username: username,
            password: password,
        });

        return Promise.resolve(void 0);
    }

    /**
     ** @note - Add updating user scores feature.
     **/
    async updateUser(body) {
        const {username, score} = body;

        await sequelize.transaction({isolationLevel: ISOLATION_LEVELS.SERIALIZABLE}, async (tx) => {
            const user = await UserModel.findOne({
                where: {
                    username: username,
                },
                attributes: {
                    exclude: ['password'],
                },
                raw: true,
                transaction: tx,
                lock: tx.LOCK.UPDATE,
            });

            /**
             ** @note - Be careful of `race condition` issues during score update via this method in NodeJS Async flavour.
             ** @solution - Consider moving to update on Request of chaining via Sequelize Transaction API.
             **/
            await UserModel.update({
                score: user.score + 1, // Auto increment for testing purpose.
            }, {
                where: {
                    username: username,
                },
                transaction: tx,
            });
        });

        return Promise.resolve(void 0);
    }

    async deleteUser(body) {
        const {username} = body;

        await UserModel.destroy({
            where: {
                username: username,
            },
        });

        return Promise.resolve(void 0);
    }

}

/** For ES5 Default Import Statement !*/
module.exports.default = UserService;
