import Application, {Request} from "../src";

const app = Application.getInstance();
class SearchRequest extends Request {
    _method = 'GET';
    _uri = '/api/mp/activities';
    middlewares = [async function (request, next) {
        console.log('==================== 1 ================')
        request.headers['Auth2'] = 'xxxxx';
        let response = await next(request);
        console.log('==================== 2 ================')
        return response;
    }, async function (request, next) {
        console.log('==================== 3 ================')
        request.headers['Auth1'] = 'yes';
        let response = await next(request);
        console.log('==================== 4 ================')
        return response;
    }];

    get middleware () {
        return [...super.middleware, ...this.middlewares];
    }

    rules () {
        return {
            name: ['required']
        };
    }

    messages () {
        return {
            'name.required': 'name是必须的'
        };
    }
}

app.run();
app.config.http = {
    gateway: 'https://www.neptune.kingdomcloud.cn/',
};
test('event test !', async function () {
    let response = await app.http.send(new SearchRequest());
    // console.log(response);
    console.log(response, response.body, response.headers, response.httpStatus, response.status, '==================== response =================')
    expect(true)
        .toEqual(true);
});