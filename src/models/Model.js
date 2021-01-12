import {extend, forEach, isFunction} from "underscore";
import Application, {caseKeyName} from "..";

export default class Model {
    cacheAttributes = ['*'];
    app = null;
    cacheKey = 'model_';
    needCache = false;
    excludeKeys = ['excludeKeys', 'needCache', 'namespace', 'cacheAttributes', 'app', 'cacheKey', 'state', 'getters', 'actions', 'mutations', 'namespaced'];
    namespaced = true;
    namespace = '';
    state = null;
    actions = null;
    mutations = null;
    getters = null;

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
        this.state = this._state();
        this.actions = this._actions();
        this.mutations = this._mutations();
        this.getters = this._getters();
        return this;
    }

    set (key, value) {
        let tmp = {};
        tmp[key] = value;
        extend(this, tmp);
        return value;
    }

    proxyForStore () {
        /**@var Application app*/
        const app = this.app;
        const namespace = this.namespace;
        const {dispatch, getters} = app['$$store'];
        if (dispatch && getters) {
            forEach(this, (item, key) => {
                if (this.excludeKeys.indexOf(key) === -1 && !isFunction(this[key])) {
                    Object.defineProperty(this, key, {
                        set (value) {

                            if (dispatch) {
                                let payload = {};
                                payload[key] = value;
                                dispatch(`${namespace}/${key}`, payload);
                            } else {
                                item = value;
                            }
                        },
                        get () {
                            return getters ? getters[`${namespace}/${key}`] : item;
                        }
                    });
                }
            });
        }
    }

    _state () {
        const state = {};
        forEach(this, (item, key) => {
            if (this.excludeKeys.indexOf(key) === -1 && !isFunction(item)) {
                state[key] = item;
            }
        });
        return state;
    }

    _getters () {
        const getters = {};
        forEach(this, (item, key) => {
            if (this.excludeKeys.indexOf(key) === -1 && !isFunction(this[key])) {
                getters[key] = state => state[key];
            }
        });
        return getters;
    }

    _actions () {
        const actions = {};
        forEach(this, (item, key) => {
            if (this.excludeKeys.indexOf(key) === -1 && !isFunction(this[key])) {
                actions[key] = ({commit}, payload) => commit(key, payload);
            }
        });
        return actions;
    }

    _mutations () {
        const mutations = {};
        forEach(this, (item, key) => {
            if (this.excludeKeys.indexOf(key) === -1 && !isFunction(this[key])) {
                mutations[key] = (state, payload) => {
                    state[key] = payload[key];
                    this.setCache();
                }
            }
        });
        return mutations;
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
