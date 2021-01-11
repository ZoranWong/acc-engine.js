import Container from '@zoranwong/pure-container';
import md5 from 'md5';
import Client from "../io/http/Client";
import Adapter from "../io/http/Adapter";
import Dispatcher from "../events/Dispatcher";
import Repository from "../config/Repository";
import Database from "../database/Database";
import WorkerManager from "../worker/WorkerManager";

const providers = new WeakMap();
const globalProviderRegistered = new WeakMap();

const NONE = 'NONE';
const INITIALING = 'INITIALING';
const RUNNING = 'RUNNING';
const DESTROYED = 'DESTROYED';

/**
 * @property {WorkerManager} workerManager
 * @property {Database} db
 * @property {Map} commands
 * @property {Repository|Proxy<Repository>} config
 * @property {Dispatcher} dispatcher
 * @property {Adapter} httpAdapter
 * @property {Client} http
 * @property {Function} bindMethod
 * @property {Function} callMethodBinding
 * @property {Function} instance
 * @property {Function} bind
 * @property {Function} singleton
 * @property {Function} hasMethodBinding
 * @property {Function} make
 * @property {Function} get
 * @property {Function} mixin
 * @property {Function} extend
 * @property {Function} registerCommand
 * @property {Function} command
 * @property {Function} on
 * @property {Function} once
 * @property {Function} emitter
 * @property {Function} getProxy
 * @property {Function} getDBDriver
 * @static {Function} getInstance
 * */
export default class Application extends Container {
    #rootPath = null;
    /**@property {WeakMap} #serviceProviders*/
    #serviceProviders;
    /**@property {WeakMap} #providerRegistered*/
    #providerRegistered;
    #registerProviders = [];
    status;
    beforeCreated = function () {};
    created = function () {};
    beforeDestroy = function () {};
    destroied = function () {};
    #lifeCycles = {
        beforeCreated: () => {
            Application.getInstance().registerServiceProviders();
            Application.getInstance().beforeCreated();
        },
        created: () => {
            Application.getInstance().boot();
            Application.getInstance().status = RUNNING;
            Application.getInstance().created();
        },
        beforeDestroy: () => {
            Application.getInstance().beforeDestroy();
        },
        onDestroy: () => {
            Application.getInstance().status = DESTROYED;
            Application.getInstance().destroied();
        }
    }

    constructor () {
        super();
        this.status = NONE;
        this.#serviceProviders = providers;
        this.#providerRegistered = globalProviderRegistered;
    }


    /**
     * 获取容器代理对象
     * @return {Container|Application|Proxy}
     */
    static getInstance () {
        /**@var {Application} instance*/
        let instance = Application._instance;
        if (!instance) {
            Application._instance = instance = new Application();
        }
        return instance.getProxy();
    }

    register (provider) {
        this.#registerProviders.push(provider);
    }

    /**
     * @return WeakMap
     * */
    get providers () {
        return this.#serviceProviders;
    }

    set providers (providers) {
        return this.#serviceProviders = providers;
    }

    providerRegistered (provider) {
        return this.#providerRegistered.has(provider);
    }

    registerProvider (provider) {
        let p = new provider(this);
        p.register();
        this.providers.set(provider, p);
        this.#providerRegistered.set(provider, true);
    }


    boot () {
        if (this.config && this.config.app && this.config.app.providers) {
            this.config.app.providers.forEach((p) => {
                if (this.providers.has(p)) {
                    let provider = this.providers.get(p);
                    provider.boot();
                }
            })
        }
    }

    registerServiceProviders () {
        let config = this.config;
        let appConfig = null;
        if (config && ( appConfig = config.app)) {
            if(appConfig.bootstrapProviders) {
                appConfig.providers = appConfig.bootstrapProviders.concat(appConfig.providers ? appConfig.providers : []).concat(this.#registerProviders);
            }
            if(appConfig.providers) {
                appConfig.providers.forEach((provider) => {
                    if (!this.providerRegistered(provider)) {
                        this.registerProvider(provider);
                    }
                });
            }
        }
    }

    run () {
        this.status = INITIALING;
        //before app run
        this.#lifeCycles.beforeCreated();
        //after
        this.#lifeCycles.created();
    }
}
