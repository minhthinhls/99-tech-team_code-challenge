/**
 ** @note - A simple middleware to demonstrate ExpressJS layer handling capabilities.
 **/
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

    return next();
};

/** For ES6 Default Import Statement !*/
export default middlewareFn;

/** For ES5 Default Import Statement !*/
module.exports.default = middlewareFn;
