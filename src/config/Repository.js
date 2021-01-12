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
        let count = 0;
        for (let k in sources) {
            count += 1;
            if (isObject(sources[k]) && !isArray(sources[k])) {
                if (!des[k]) {
                    des[k] = sources[k];
                }
                if(this.extend(des[k], sources[k]) < 0) {
                    des[k] = sources[k];
                }
            } else {
                des[k] = sources[k];
            }
        }
        if(count === 0){
            return -1;
        }else{
            return 1;
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
