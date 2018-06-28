import { Inject, Injectable, InjectionToken } from '@angular/core';
import { nbAuthCreateToken } from './token';
import { NB_AUTH_TOKENS } from '../../auth.options';
export var NB_AUTH_FALLBACK_TOKEN = new InjectionToken('Nebular Auth Options');
/**
 * Creates a token parcel which could be stored/restored
 */
var NbAuthTokenParceler = /** @class */ (function () {
    function NbAuthTokenParceler(fallbackClass, tokenClasses) {
        this.fallbackClass = fallbackClass;
        this.tokenClasses = tokenClasses;
    }
    NbAuthTokenParceler.prototype.wrap = function (token) {
        return JSON.stringify({
            name: token.getName(),
            value: token.toString(),
        });
    };
    NbAuthTokenParceler.prototype.unwrap = function (value) {
        var tokenClass;
        var tokenValue = '';
        try {
            var tokenPack = JSON.parse(value);
            tokenClass = this.getClassByName(tokenPack.name) || this.fallbackClass;
            tokenValue = tokenPack.value;
        }
        catch (e) {
            tokenClass = this.fallbackClass;
        }
        return nbAuthCreateToken(tokenClass, tokenValue);
    };
    // TODO: this could be moved to a separate token registry
    // TODO: this could be moved to a separate token registry
    NbAuthTokenParceler.prototype.getClassByName = 
    // TODO: this could be moved to a separate token registry
    function (name) {
        return this.tokenClasses.find(function (tokenClass) { return tokenClass.NAME === name; });
    };
    NbAuthTokenParceler.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbAuthTokenParceler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_FALLBACK_TOKEN,] },] },
        { type: Array, decorators: [{ type: Inject, args: [NB_AUTH_TOKENS,] },] },
    ]; };
    return NbAuthTokenParceler;
}());
export { NbAuthTokenParceler };
//# sourceMappingURL=token-parceler.js.map