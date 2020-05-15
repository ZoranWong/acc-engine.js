import Container from '@zoranwong/pure-container';
import md5 from 'md5';
const providers = new Map();
const globalProviderRegistered = new Map();
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
        if(!Application._instance) {
            Application._instance = new Application();
        }
        return Application._instance.getProxy();
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
