import ServiceProvider from "../constracts/ServiceProvider";
import LocalStorage from "./LocalStorage";

export default class CacheServiceProvider extends ServiceProvider {
    register () {
        this.app.singleton('cache', () => {
            return new LocalStorage();
        });
    }
}