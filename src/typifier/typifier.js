//<!-- MODULE -->//
if (typeof require === 'function' && typeof module !== 'undefined' && module.exports) {

}
//<!-- /MODULE -->//

/**
 * Typifier
 *
 * The javascript library to get the type of a given variable.
 *
 */
class Typifier {
    static getVersion() {
        const self = Typifier;
        return self._version;
    }
}

/**
 * @type {string}
 * @private
 */
Typifier._version = "0.0.1";

//<!-- MODULE -->//
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Typifier;
}
//<!-- /MODULE -->//