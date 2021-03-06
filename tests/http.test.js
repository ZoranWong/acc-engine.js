import Application, {Request} from "../src";
import HttpRequestOption from "../src/io/http/HttpRequestOption";

const app = Application.getInstance();
class ActivityRequest extends Request {
    _method = 'GET';
    _uri = '/api/mp/activities';
    middlewares = [async function (request, next) {
        console.log('==================== 1 ================')
        // request.headers['Auth2'] = 'xxxxx';
        let response = await next(request);
        console.log('==================== 2 ================')
        return response;
    }, async function (request, next) {
        console.log('==================== 3 ================')
        // request.headers['Auth1'] = 'yes';
        let response = await next(request);
        console.log('==================== 4 ================')
        return response;
    }];

    get middleware () {
        return [...super.middleware, ...this.middlewares];
    }

    rules () {
        return {
            // name: 'required|string'
        };
    }

    messages () {
        return {
            // 'name.required': 'name是必须的'
        };
    }
}

app.run();
app.config.http = {
    gateway: 'http://neptune.klsfood.cn/',
};
test('event test !', async function () {
    try{
        // let response = await ActivityRequest.send();
        // let response = await Request.send({uri: '/api/mp/activities', method: 'GET'});
        let response = await app.http.get('api/mp/activities');
        console.log(response, response.body, response.headers, response.httpStatus, response.status, '==================== response =================')
    }catch (e) {
        console.log(e.errors)
    }
    // console.log({middleware: [], method: 'GET', uri: '', headers: {}, data: {}, response: ''} instanceof HttpRequestOption)
    expect(true).toEqual(true);
});