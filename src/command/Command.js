import Application from "../foundation/Application";

export default class Command {
    /**
     * @property {Application} #app
     * */
    #app = null;

    /**
     * @param {Application} app
     * */
    constructor(app) {
        this.#app = app;
    }

    handle(...params) {

    }
}
