export  default  class StoreManager {
    #app = null;
    #store = null;
    #modules = {};
    constructor(app) {
        this.#app = app;
    }

    add(name, model){
        this.#modules[name] = this.modelProxy(model);
    }

    setStore() {
    }

    setModelProxy() {

    }

    modelProxy(model) {

    }
}