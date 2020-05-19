import {
    isFunction,
    filter,
    first
} from 'underscore';
export default class Collection {
    #items = [];
    constructor(items) {
        this.#items = items;
    }
    #where(...params) {
        if(params.length === 1) {
            let callback = params[0];
            if(isFunction(callback)) {
                return filter(this.#items, callback);
            }
        } else if(params.length === 2) {
            let [key, value] = params;
            return filter(this.#items, (model) => {
                return model[key] === value;
            })
        } else if(params.length === 3) {
            let [key, operator, value] = params;
            return filter(this.#items, (model) => {
                let result = false;
                switch (operator) {
                    case '=':
                        result = model[key] === value;
                        break;
                    case '>':
                        result = model[key] > value;
                        break;
                    case '>=':
                        result = model[key] >= value;
                        break;
                    case '<':
                        result = model[key] < value;
                        break;
                    case '<=':
                        result = model[key] <= value;
                        break;
                    case 'between':
                        result = (model[key] >= value[0] && model[key] < value[1])
                        break;
                    case 'in':
                        result = value.includes(model[key]);
                        break;
                    case 'not in':
                        result = !value.includes(model[key]);
                        break;
                }

                return result;
            })
        }
        return this.#items;
    }
    where(...params) {
        return new Collection(this.#where(...params));
    }
    find(...params) {
        if(params.length === 1) {
            params.lpush('id');
        }
        return first(this.#where(...params));
    }

    first(...params) {
        return first(this.#where(...params));
    }
}
