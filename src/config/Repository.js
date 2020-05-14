import {
    extend,
    isString
} from 'underscore';
export default class Repository {
    #items = {};
    constructor(config) {
        this.#items = config;
    }

    prop(key, value) {
        let data = value;
        let keys = this.parseKey(key)
            .reverse();
        keys.forEach((k) => {
            let temp = {};
            temp[k] = data;
            data = temp;
        });
        extend(this.#items, data);
        return value;
    }

    getProp(key) {
        let keys = this.parseKey(key);
        let value = this.#items;
        keys.forEach((k) => {
            if(typeof value !== 'undefined') {
                value = value[k];
            } else {
                value = null;
            }
        });
        return value;
    }
    parseKey(key) {
        return isString(key) ? key.split('.') : [key];
    }
}
