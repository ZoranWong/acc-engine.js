import Application from '../foundation/Application';
/**
 * [app description]
 * @class ServiceProvider
 * @property {Application} app
 * @constructor {ServiceProvider}
 */
export default class ServiceProvider {
    /**
     * [app description]
     * @type {Application}  #app
     */
    #app = null;
    /**
     * [constructor description]
     * @param {Application} app [description]
     */
    constructor(app) {
        this.#app = app;
    }
    /**
     * [app description]
     * @return {Application} [description]
     */
    get app() {
        return this.#app;
    }
    register() {
        this.app.singleton('config', () => {
            return {};
        });
    }

    boot() {}
}
