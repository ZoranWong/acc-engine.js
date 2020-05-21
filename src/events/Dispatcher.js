import Listener from './Listener';
import Application from "../foundation/Application";
import EventInterface from './EventInterface';
export default class Dispatcher {
    #listeners = new WeakMap();
    /**
     * @property {Application} #app
     * */
    #app = null;
    constructor(app) {
        this.#app = app;
    }

    /**
     * @param {EventInterface} event
     * @param {Listener} listener
     * */
    on(event, listener) {
        let listeners = this.#listeners.get(event);
        if(!this.#listeners.has(event)) {
            listeners = [];
            this.#listeners.set(event, listeners);
        }

        if(!(listeners.indexOf(listener) > -1)) {
            listeners.push({
                listener: listener,
                once: false
            });
        }
    }
    /**
     * @param {EventInterface} event
     * @param {Listener} listener
     * */
    once(event, listener) {
        let listeners = this.#listeners.get(event);
        if(!this.#listeners.has(event)) {
            listeners = [];
            this.#listeners.set(event, listeners);
        }

        if(!(listeners.indexOf(listener) > -1)) {
            listeners.push({
                listener: listener,
                once: true
            });
        }
    }
    /**
     * @param {EventInterface} event
     * */
    emitter(event) {
        let _constructor = event.constructor;
        let listeners = this.#listeners.get(_constructor);
        if(listeners) {
            listeners.map((item, index) => {
                let {
                    listener,
                    once
                } = item;

                if(once) {
                    listeners.splice(index, 1);
                }

                setTimeout(() => {
                    if(this.app.isClass(listener)) {
                        let handler = new listener();
                        handler.handle(event);
                    } else {
                        listener(event);
                    }
                }, 100);
            })
        }
    }

    /**
    * @return {Application}
    * */
    get app() {
        return this.#app;
    }
}
