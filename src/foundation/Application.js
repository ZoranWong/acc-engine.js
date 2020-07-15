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
    #serviceProviders = null;
    #providerRegistered = null;
    #lifeCycles = {
        beforeCreated: () => {
            Application.getInstance().registerServiceProviders();
        },
        created: () => {
            Application.getInstance().boot();
        },
        beforeDestroy: () => {

        },
        onDestroy: () => {

        }
    }

    constructor () {
        super();
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

    register () {

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
                appConfig.providers = appConfig.bootstrapProviders.concat(appConfig.providers ? appConfig.providers : []);
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
        //before app run
        this.#lifeCycles.beforeCreated();
        //after
        this.#lifeCycles.created();
    }
}
