export default class Client {
    #app = null;
    constructor(app) {
        this.#app = app;
    }
    get adapter() {
        return this.#app.httpAdapter;
    }
}
