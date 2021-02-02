import {extend, forEach, isFunction, isEmpty, where, pick} from "underscore";
import Application, {caseKeyName} from "..";

export default class Model {
    cacheAttributes = ['*'];
    static savingCache = false;
    cacheKey = '';
    needCache = false;

    constructor (options = {cacheKey: ''}) {
        this.cacheKey += options.cacheKey || '';
    }


    static instance (cacheKey = '') {
        let instance = new this({cacheKey});
        instance.initial();
        return instance;
    }

    getApplication () {
        return Application.getInstance();
    }

    excludeCacheKeys() {
        return ['savingCache', 'needCache', 'cacheAttributes', 'cacheKey'];
    }
    resetModelFromCache () {
        if(!this.cacheKey){
            return;
        }
        let app = this.getApplication();
        if (this.needCache && app['cache']) {
            let cachedData = app['cache'].get(this.cacheKey);
            let reset = (cachedData) => {
                if (cachedData) {
                    if (this.cacheAttributes.length !== 1 || !this.cacheAttributes.includes('*')) {
                        cachedData = pick(cachedData, (item, key) => {
                            return this.cacheAttributes.includes(key);
                        });
                    }
                    forEach(cachedData, (item, key) => {
                        this.set(key, item);
                    });
                }
            }
            if (cachedData instanceof Promise) {
                cachedData.then((cachedData) => {
                    reset(cachedData);
                })
            } else {
                reset(cachedData);
            }
        }
    }

    setCache () {
        let app = this.getApplication();
        if (this.needCache && app['cache'] && !this.constructor.savingCache) {
            this.constructor.savingCache = true;
            let excludeCacheKeys = this.excludeCacheKeys();
            let id = setTimeout(async () => {
                let cacheData = {};
                if (this.cacheAttributes.length === 1 && this.cacheAttributes[0] === '*') {
                    forEach(this, (item, key) => {
                        if (excludeCacheKeys.indexOf(key) === -1 && !isFunction(this[key])) {
                            cacheData[key] = item;
                        }
                    })
                } else {
                    forEach(this.cacheAttributes, (key) => {
                        cacheData[key] = this[key];
                    });
                }
                await app['cache'].set(this.cacheKey, cacheData);
                this.constructor.savingCache = false;
                clearTimeout(id);
            }, 200);
        }
    }

    initial (options = {}) {
        this.resetModelFromCache();
        if (!isEmpty(options))
            this.setModel(options);
        return this;
    }

    set (key, value) {
        let tmp = {};
        tmp[key] = value;
        extend(this, tmp);
        return value;
    }

    setModel (data = {}) {
        for (const key in data) {
            const camelKey = caseKeyName(key);
            if (typeof this[camelKey] !== 'undefined') {
                this[camelKey] = data[key];
            }
        }
    }
}
