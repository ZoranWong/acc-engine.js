import app from '../src/index';

app.run();

test('commnad method has been binded into Application!', () => {
    expect(app.hasMethodBinding('command') instanceof Function)
        .toEqual(false);
});
