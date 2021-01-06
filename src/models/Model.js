import {extend, forEach, isFunction} from "underscore";

export default class Model {
    cacheAttributes = [];
    app = null;
    cacheKey = 'model_';
    excludeKeys = ['excludeKeys', 'cacheAttributes', 'app', 'cacheKey', 'state', 'getters', 'actions', 'mutations', 'namespaced'];
    namespaced = true;
    namespace = '';
    state = null;
    actions = null;
    mutations = null;
    getters = null;

    constructor (app, namespace) {
        this.namespace = namespace;
        this.app = app;
    }

    static instance (app, namespace) {
        let instance = new this(app, namespace);
        instance.initial();
        return instance;
    }

    resetModelFromCache () {
        if (this.namespace) {
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

    initial() {
        this.resetModelFromCache();
        this._defineProperty();
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

    _defineProperty () {
        const state = {};
        /**@var Application app*/
        const app = this.app;
        const namespace = this.namespace;
        forEach(this, (item, key) => {
            if (this.excludeKeys.indexOf(key) === -1 && !isFunction(this[key])) {
                Object.defineProperty(this, key, {
                    set (value) {
                        const {dispatch} = app['$$store'];
                        dispatch(`${namespace}/${key}`, value);
                    },
                    get () {
                        const {getters} = app['$$store'];
                        return getters[`${namespace}/${key}`]
                    }
                });
            }
        });
        return state;
    }

    _state () {
        const state = {};
        forEach(this, (item, key) => {
            if (this.excludeKeys.indexOf(key) === -1 && !isFunction(this[key])) {
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
}
