import Application from "../foundation/Application";
export default class Database {
    /**@property {FunctionConstructor} #driver*/
    #driver ;
    #app = null;
    /**
    * @param {Application} app
    * */
    constructor(app) {
        this.#app = app;
        this.#driver = app.getDBDriver(app);
    }

    get store() {
        return new this.driver(this.#store);
    }

    /**
    * @return {FunctionConstructor}
    * */
    get driver() {
        return this.#driver;
    }
}
