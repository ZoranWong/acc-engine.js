import {extend, forEach, isFunction} from "underscore";

export default class Model {
    cacheAttributes = [];
    app = null;
    cacheKey = null;
    excludeKeys = ['cacheAttributes', 'app', 'cacheKey', 'state', 'getters', 'actions', 'mutations', 'namespaced'];
    namespaced = true;
    namespace = '';
    state = null;
    actions = null;
    mutations = null;
    getters = null;

    constructor (app) {
        this.app = app;
        this.resetModelFromCache();
        this.state = this._state();
        this.actions = this._actions();
        this.mutations = this._mutations();
        this.getters = this._getters();
        this._defineProperty();
    }

    resetModelFromCache () {
        if (this.cacheKey) {
            let cachedData = this.app['cache'].get(this.cacheKey);
            if (cachedData) {
                forEach(this.cacheAttributes, (key) => {
                    if (cachedData[key]) {
                        this.set(key, cachedData[key]);
                    }
                });
            }
        }
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
