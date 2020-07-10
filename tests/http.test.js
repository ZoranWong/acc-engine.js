import app from '../src/index';
import Request from "../src/io/http/Request";
class SearchRequest extends Request {
    _method = 'GET';
    _uri = '/api/mp/activities';
    _middleware = [async function (request, next) {
        console.log('==================== 1 ================')
        let response = await next(request);
        console.log('==================== 2 ================')
        return response;
    }, async function (request, next) {
        console.log('==================== 3 ================')
        let response = await next(request);
        console.log('==================== 4 ================')
        return response;
    }];
}

app.run();
app.config.http = {
    gateway: 'https://www.neptune.kingdomcloud.cn',
};
test('event test !', async function () {
    let response = await app.http.send(new SearchRequest());
    // console.log(response);
    console.log(response, response.body, response.headers, response.httpStatus, response.status, '==================== response =================')
    expect(true)
        .toEqual(true);
});