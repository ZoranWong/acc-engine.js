export default class Client {
    #request = null;
    #headers = {};
    constructor() {
        this.#request = new XMLHttpRequest();
    }

    send() {
        this.#request.send();
    }
}
