import Application from "../src";
const app = Application.getInstance();
app.run();
app.run();
app.config.app.version = '0.0.1'
test('Application version 0.0.1!', () => {
    expect(app.config.app.version === '0.0.1')
        .toEqual(true);
});
