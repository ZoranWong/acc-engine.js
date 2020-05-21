import Application  from "../foundation/Application";
export default class Listener {
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
    /**
     * @param {EventInterface} event
     * */
    handle(event) {}
}
