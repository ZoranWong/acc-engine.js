import Application, {ServiceProvider} from "../src";
import {EventInterface} from "../lib";
let app = Application.getInstance();
class ConfigProvider extends ServiceProvider{
    register () {
        // return super.register();
        this.app.status = 'ddd';
        console.log('------------- config provider --------', this.app);
        this.app.config.provider = 1;
    }
}
app.register(ConfigProvider);
app.run();
test('provider test !', async function () {
    console.log(app.config)
    expect(1)
        .toEqual(1);
});