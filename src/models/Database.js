export default class Database {
    #driver = null;
    #store = {};
    #app = null;
    constructor(app, driver) {
        this.#app = app;
        this.#driver = driver;
    }

    get store() {
        return new this.#driver(this.#store);
    }
}
