import {
    each
} from 'underscore';
export default class DBDriver {
    #models = {};
    #store = null;
    constructor(models, store) {
        this.#store = store;
        each(models, (model, key) => {
            this.#models[key] = this.model(model);
        });
    }

    model(model) {
        return model;
    }

    addModel(name, model) {
        this.#models[name] = model;
    }
}
