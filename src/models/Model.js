import {extend, forEach, isFunction} from "underscore";
import Application, {caseKeyName} from "..";

export default class Model {
    cacheAttributes = ['*'];
    savingCache = false;
    app = null;
    cacheKey = 'model_';
    needCache = false;
    excludeKeys = ['excludeKeys', 'savingCache', 'needCache', 'namespace', 'cacheAttributes', 'app', 'cacheKey', 'state', 'getters', 'actions', 'mutations'];
    namespace = '';

    constructor (options = {namespace: ''}) {
        this.app = Application.getInstance();
    }

    static instance (app, namespace) {
        let instance = new this(app, namespace);
        instance.initial();
        return instance;
    }

    resetModelFromCache () {
        if (this.needCache && this.namespace && this.app['cache']) {
            let cachedData = this.app['cache'].get(this.cacheKey + this.namespace);
            let reset = (cachedData) => {
                if (cachedData) {
                    if (this.cacheAttributes.length === 1 && this.cacheAttributes[0] === '*') {
                        forEach(cachedData, (item, key) => {
                            this.set(key, item);
                        });
                    } else {
                        forEach(this.cacheAttributes, (key) => {
                            if (cachedData[key]) {
                                this.set(key, cachedData[key]);
                            }
                        });
                    }
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
        if (this.needCache && this.namespace && this.app['cache']) {
            let cacheData = {};
            if (this.cacheAttributes.length === 1 && this.cacheAttributes[0] === '*') {
                forEach(this, (item, key) => {
                    if (this.excludeKeys.indexOf(key) === -1 && !isFunction(this[key])) {
                        cacheData[key] = item;
                    }
                })
            } else {
                forEach(this.cacheAttributes, (key) => {
                    cacheData[key] = this[key];
                });
            }
            this.app['cache'].set(this.cacheKey + this.namespace, cacheData);
        }
    }

    initial (options) {
        if (!options['namespace']) {
            options['namespace'] = caseKeyName(this.constructor.name);
        }
        this.namespace = options['namespace'];
        this.resetModelFromCache();
        this.setModel(options);
        return this;
    }

    set (key, value) {
        let tmp = {};
        tmp[key] = value;
        extend(this, tmp);
        return value;
    }

    setModel (data) {
        for (const key in data) {
            const camelKey = caseKeyName(key);
            if (typeof this[camelKey] !== 'undefined') {
                this[camelKey] = data[key];
            }
        }
    }
}
