import Application from "../../foundation/Application";
export default class Adapter {
    #app = null;
    constructor(app) {
        this.#app = app;
    }

    /**
     * @return {Application}
     * */
    get app () {
        return this.#app;
    }

    get config() {
        return this.app.config.socket;
    }
    onClose(onClose){}
    onOpen(onOpen){}
    onMessage(onMessage){}
    onError(onError){}
    close(code, reason){}
    send(data){}
}