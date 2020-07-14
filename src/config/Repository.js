import {
    extend,
    isString,
    isObject,
    isArray
} from 'underscore';

export default class Repository {
    #items = {};

    constructor (config) {
        this.#items = config;
    }

    prop (key, value) {
        let data = value;
        let keys = this.parseKey(key)
            .reverse();
        keys.forEach((k) => {
            let temp = {};
            temp[k] = data;
            data = temp;
        });
        this.extend(this.#items, data);
        return value;
    }

    extend (des, sources) {
        for (let k in sources) {
            if (isObject(sources[k]) && !isArray(sources[k])) {
                if (!des[k]) {
                    des[k] = {};
                }
                this.extend(des[k], sources[k]);
            } else {
                des[k] = sources[k];
            }
        }
    }

    getProp (key) {
        let keys = this.parseKey(key);
        let value = this.#items;
        keys.forEach((k) => {
            if (typeof value !== 'undefined') {
                value = value[k];
            } else {
                value = null;
            }
        });
        return value;
    }

    parseKey (key) {
        return isString(key) ? key.split('.') : [key];
    }
}
