export default class UriParamParseMiddleware {
    /**
     * @param {Request} request
     * @param {Function} next
     * */
    async handle (request, next) {
        let regex = /\{(\w+)\}/g;
        request._uri = request._uri.replace(regex, (full, key) => {
            console.log(full, key);
            let str = request.data[key];
            delete  request.data[key];
            return str;
        });
        return  await next(request);
    }
}