import Container from '@zoranwong/pure-container';
import md5 from 'md5';
import Client from "../io/http/Client";
import Adapter from "../io/http/Adapter";
import Dispatcher from "../events/Dispatcher";
import Repository from "../config/Repository";
import Database from "../database/Database";
import WorkerManager from "../worker/WorkerManager";
const providers = new Map();
const globalProviderRegistered = new Map();
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
 * */
export default class Application extends Container {
    #rootPath = null;
    #serviceProviders = null;
    #providerRegistered = null;
    #config = {};
    #lifeCycles = {
        beforeCreated: () => {
            this.registerServiceProviders();
        },
        created: () => {
            this.boot();
        },
        beforeDestroy: () => {

        },
        onDestroy: () => {

        }
    }
    constructor() {
        super();
        this.#serviceProviders = providers;
        this.#providerRegistered = globalProviderRegistered;
    }

    /**
     * 获取容器代理对象
     * @return {Container|Application|Proxy}
     */
    static getInstance() {
        /**@var {Application} instance*/
        let instance = Application._instance;
        if(!instance) {
            Application._instance = instance = new Application();
        }
        return instance.getProxy();
    }

    register() {

    }

    get providers() {
        return this.#serviceProviders;
    }

    set providers(providers) {
        return this.#serviceProviders = providers;
    }

    providerRegistered(provider) {
        let key = this.#providerToKey(provider);
        return this.#providerRegistered.has(key);
    }

    registerProvider(provider) {
        let p = new provider(this);
        let key = this.#providerToKey(provider);
        p.register();
        this.providers.set(key, p);
        this.#providerRegistered.set(key, true);
    }

    #providerToKey(provider) {
        return md5(provider.toString());
    }

    boot() {
        this.providers.forEach((provider) => {
            provider.boot();
        });
    }

    registerServiceProviders() {
        let config = this.get('config');
        if(config && config.app && config.app.providers) {
            config.app.providers.forEach((provider) => {
                if(!this.providerRegistered(provider)) {
                    this.registerProvider(provider);
                }
            });
        }
    }
    run() {
        //before app run
        this.#lifeCycles.beforeCreated();
        //after
        this.#lifeCycles.created();
    }
}
