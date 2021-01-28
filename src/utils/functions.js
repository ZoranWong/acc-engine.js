export const LOWER_SNAKE = 'LOWER_SNAKE';
export const UPPER_SNAKE = 'UPPER_SNAKE';
export const LOWER_CAMEL = 'LOWER_CAMEL';
export const UPPER_CAMEL = 'UPPER_CAMEL';

export function caseKeyName (key, caseForm = LOWER_CAMEL) {
    let hyphenateRE = null;
    switch (caseForm) {
        case LOWER_CAMEL:
            hyphenateRE = /_\D/g;
            key = (key + '').replace(hyphenateRE, match => {
                return match.charAt(1).toUpperCase();
            });
            key  = key[0].toLowerCase() + key.substr(1, key.length - 1);
            break;
        case UPPER_SNAKE:
            hyphenateRE = /_\D/g;
            key = ("_" + key).replace(hyphenateRE, match => match.charAt(1).toUpperCase());
            break;
        case LOWER_SNAKE:
            hyphenateRE = /\B([A-Z])/g;
            key = key.replace(hyphenateRE, '_$1').toLowerCase()
            break;
        case UPPER_CAMEL:
            hyphenateRE = /\B([A-Z])/g;
            key = key.replace(hyphenateRE, '_$1').toUpperCase()
            break;

    }

    return key;
}