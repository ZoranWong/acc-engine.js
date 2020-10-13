import {isObject, isString} from 'underscore';
export default class LocalStorage {
    set(key, value) {
        if(isObject(value)) {
            value = JSON.stringify(value);
        }
        return localStorage.setItem(key, value);
    }

    get(key){
        let value = localStorage.getItem(key);
        if(isString(value)) {
            try {
                return JSON.parse(value);
            }catch (e) {
                return value;
            }
        }
    }

    remove(key) {
        return localStorage.removeItem(key);
    }
}