export default class Database {
    #driver = null;
    #store = {};
    constructor() {

    }

    get store() {
        return new this.#driver(this.#store);
    }
}
