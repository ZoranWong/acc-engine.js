import Adapter from "./Adapter";

export default class WebsocketAdapter extends Adapter {
    #sockets = {};
    /**@property {WebSocket} #currentSocket*/
    #currentSocket = null;

    constructor(app) {
        super(app);
        this.socket();
    }

    /**
     * @return {WebSocket}
     * */
    get currentSocket() {
        return this.#currentSocket;
    }

    /**
     * @param {String} socket
     * @return {WebsocketAdapter}
     * */
    socket(socket = 'default') {
        if (!this.#sockets[socket]) {
            let {gateway, protocol} = this.config[socket];
            this.#sockets[socket] = new WebSocket(gateway, protocol);
        }
        this.#currentSocket = this.#sockets[socket];
        return this;
    }

    onOpen(onOpen) {
        this.currentSocket.onopen = (event) => {
            onOpen.call(this, event);
        }
        return this;
    }

    onClose(onClose) {
        this.currentSocket.onclose = (event) => {
            onClose.call(this, event);
        }
        return this;
    }
    onError(onError) {
        this.currentSocket.onerror = (event) => {
            onError.call(this, event);
        }
        return this;
    }

    onMessage(onMessage) {
        this.currentSocket.onmessage = (event) => {
            onMessage.call(this, event);
        }
        return this;
    }

    close(code, reason) {
        this.currentSocket.close(code, reason);
    }

    send(data) {
        this.currentSocket.send(data);
    }
}