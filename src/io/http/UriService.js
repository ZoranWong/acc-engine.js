import _ from 'underscore';
import query from 'query-string';
export default class UriService  {
    query (params, key = null) {
        let query = this.buildQuery(params, key);
        return query ? ('?' + query) : '';
    }

    buildQuery (params, key) {
        let queryStr = '';
        let self = this;
        _.map(params, function (value, index) {
            let k = '';
            if (key) {
                k = `${key}[${index}]`;
            } else {
                k = index;
            }
            if (_.isArray(value) || _.isObject(value)) {
                if (!(_.isArray(value) && value.length === 0)) {
                    queryStr += self.buildQuery(value, k);
                }
            } else {
                if (_.isBoolean(value)) {
                    value = value ? 1 : 0;
                }
                queryStr += `${k}=${value}&`;
            }
        });

        if (typeof params === 'string') {
            queryStr = params;
        }
        return queryStr;
    }

    encodeURI (value) {
        return encodeURI(value);
    }

    decodeURI (value) {
        return decodeURI(value);
    }

    encodeURIComponent (value) {
        return encodeURIComponent(value);
    }

    decodeURIComponent (value) {
        return decodeURIComponent(value);
    }

    queryParse (url) {
        return query.parse(url)
    }
}
