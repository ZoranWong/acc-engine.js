import {extend, forEach, isFunction} from "underscore";
import Application, {caseKeyName} from "..";

export default class Model {
    cacheAttributes = [];
    app = null;
    cacheKey = 'model_';
    needCache = false;
    excludeKeys = ['excludeKeys', 'namespace', 'cacheAttributes', 'app', 'cacheKey', 'state', 'getters', 'actions', 'mutations', 'namespaced'];
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
            if (cachedData) {
                forEach(this.cacheAttributes, (key) => {
                    if (cachedData[key]) {
                        this.set(key, cachedData[key]);
                    }
                });
            }
        }
    }

    initial (options) {
        if(!options['namespace']) {
            options['namespace'] = caseKeyName(this.constructor.name);
        }
        this.resetModelFromCache();
        this.setModel(options);
        this.state = this._state();
        this.actions = this._actions();
        this.mutations = this._mutations();
        this.getters = this._getters();
        this._defineProperty();
        return this;
    }

    set (key, value) {
        let tmp = {};
        tmp[key] = value;
        extend(this, tmp);
        return value;
    }

    _defineProperty () {
        /**@var Application app*/
        const app = this.app;
        const namespace = this.namespace;
        const {dispatch, getters} = app['$$store'];
        if(dispatch && getters) {
            forEach(this, (item, key) => {
                if (this.excludeKeys.indexOf(key) === -1 && !isFunction(this[key])) {
                    Object.defineProperty(this, key, {
                        set (value) {

                            if(dispatch)
                                dispatch(`${namespace}/${key}`, value);
                            else
                                item = value;
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
                mutations[key] = (state, payload) => state[key] = payload[key];
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
