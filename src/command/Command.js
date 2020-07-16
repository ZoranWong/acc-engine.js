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

    async handle(...params) {

    }

    /**
     * @return {Application}
     * */
    get app () {
        return this.#app;
    }
}
