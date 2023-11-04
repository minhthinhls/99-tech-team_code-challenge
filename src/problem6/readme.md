# <div align="center">Problem 6: Architecture</div>

## Requirements

- Thousands of clients will fire HTTP Requests, to our back-end server, to retrieve the top 10 users score `(1)`.
- Only allow authenticated & authorized requests from user, and valid ACTION_FLAGS to raise user's score `(2)`.

## Solution

- To counter the heavy targeted payload by Clients, the need of Caching Server (RedisDB) to store
  the top 10 users in score is main our priority `(1)`.
- Create an action handler as a Middleware. Proxy user's action into our Internal Services to digest
  the score updating process`(2)`.
- See `Image-01.png` and `Image-02.png` for the workflow of the application.

## Typescript Example

```typescript
/** [Authentication & Authorization] Middleware !*/
export const middlewareFn = () => async function (
    request: any,
    response: any,
    next: () => any,
): Promise<void | any> {

    /** Check Authorization at this Middleware Layer !*/
    if (!request.body.token) {
        /** Token is invalid or expired, please login again !*/
        return response.status(401).send();
    }

    /** Check valid ACTION_FLAGS at this Middleware Layer !*/
    if (!VALID_FLAGS.includes(request.body.flag)) {
        return response.status(400).send();
    }

    return next();
};
```

```typescript
/** User Router - Handling users action that alternate their scores !*/
import Authorization from "@/middleware/authorization";

const __UserRouter__ = require('express').Router();

/** Any HTTP Request firing to '/api/v1/user/action' required Token injected within Request Body !*/
__UserRouter__.use('/action', Authorization(), require('./action/handler'));
```

```typescript
/** Action Handler Service !*/
import {redisClient} from "@/global/redis";
import sequelize from "@/global/mysql";

export default class FetchScoreService {
    async setTop10Scores(body) {
        // Using Sequelize connection to update on the Scores within User Table.
        await sequelize.action();
        // Invalidate Redis Cache and set new top 10 user score here.
        await redisClient.set('key@', 'value@', "Ex", /* 48-hours expiration */ 48 * 60 * 60);
    }
}
```

```typescript
/** Fetching Data Service !*/
import {redisClient} from "@/global/redis";

export default class FetchScoreService {
    async getTop10Scores() {
        return redisClient.get('key@');
    }
}
```

---

## Testing API.

Using Postman

URL: http://localhost:8080/api/v1/user/action

BODY:

```json
{
    "userName": "TestUser",
    "token": "@",
    "flag": "ACTION_FLAG"
}
```

## License

[99-TECH-TEAM](https://99tech.notion.site/Code-Challenge-05cdb9e0d1ce432a843f763b5d5f7497)
