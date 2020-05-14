export default class Command {
    #app = null;
    constructor(app) {
        this.#app = app;
    }
    handle(...params) {

    }
    static name() {
        return 'Command';
    }
}
