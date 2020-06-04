import app from '../src/index';
import {Request} from "../src/index";

class SearchRequest extends Request{
    _method = 'GET';
}
app.run();
app.config.http = {
    gateway: 'https://www.baidu.com',
    headers: {},
    middleware: []
};
test('event test !', async function () {
    let response = await app.http.send(new SearchRequest());
    console.log(response)
    expect(true)
        .toEqual(true);
});