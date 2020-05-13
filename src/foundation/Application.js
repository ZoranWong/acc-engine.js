import Container from '@zoranwong/pure-container';
import md5 from 'md5';
const providers = new WeakMap();
const globalProviderRegistered = new WeakMap();
export default class Application extends Container {
    #rootPath = null;
    #serviceProviders = null;
    #providerRegistered = null;
    #config = {};
    constructor() {
        this.#serviceProviders = providers;
        this.#providerRegistered = globalProviderRegistered;
    }

    register() {

    }

    get providers() {
        return this.#serviceProviders;
    }

    set providers(providers) {
        return this.#serviceProviders = providers;
    }

    providerRegistered(name) {
        return typeof this.#providerRegistered[name] !== 'undefined' ? true : false;
    }

    registerProvider(provider) {
        this.providers.push(new provider(this));
        this.#providerRegistered[this.#providerToKey(provider)] = true;
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
        this.config.app.providers.forEach((provider) => {
            if(!this.providerRegistered(provider)) {
                this.registerProvider(provider);
            }
        });
    }

    run() {

    }

    set rootPath(path = null) {
        return this.#rootPath = path;
    }

    get rootPath() {
        return this.#rootPath;
    }
}
