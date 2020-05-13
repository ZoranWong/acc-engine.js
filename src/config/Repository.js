import {
    extend
} from 'underscore';
export default class Repository {
    #items = {};
    constructor(config) {
        this.#items = config;
        this.__prop__ = new Proxy(this, {
            set(obj, prop, value) {
                return obj.prop(prop, value);
            },
            get(obj, prop) {
                return obj.getProp(prop);
            }
        });
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
    }
    parseKey(key) {
        return key.split('.');
    }
}
