import Listener from './Listener';
export default class Dispatcher {
    #listeners = new WeakMap();
    #app = null;
    constructor(app) {
        this.#app = app;
    }

    on(event, listener) {
        let listeners = this.#listeners.get(event);
        if(!this.#listeners.has(event)) {
            listeners = [];
            this.#listeners.set(event, listeners);
        }

        if(!(listeners.indexOf(listener) > -1)) {
            listeners.push({
                handle: listener,
                once: false
            });
        }
    }

    once(event, listener) {
        let listeners = this.#listeners.get(event);
        if(!this.#listeners.has(event)) {
            listeners = [];
            this.#listeners.set(event, listeners);
        }

        if(!(listeners.indexOf(listener) > -1)) {
            listeners.push({
                handle: listener,
                once: true
            });
        }
    }

    emitter(event) {
        let _constructor = event.constructor;
        let listeners = this.#listeners[_constructor];
        if(listeners) {
            listeners.map((item, index) => {
                let {
                    listener,
                    once
                } = item;

                if(item['once']) {
                    listeners.splice(index, 1);
                }

                let id = setTimeout(() => {
                    if(this.#app.isClass(listener)) {
                        let handler = new listener();
                        handler.handle(event);
                    } else {
                        listener(event);
                    }
                    clearTimeout(id);
                }, 100);
            })
        }
    }
}
