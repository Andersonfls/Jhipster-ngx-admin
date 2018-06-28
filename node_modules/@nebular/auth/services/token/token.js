var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { urlBase64Decode } from '../../helpers';
var NbAuthToken = /** @class */ (function () {
    function NbAuthToken() {
    }
    NbAuthToken.prototype.getName = function () {
        return this.constructor.NAME;
    };
    return NbAuthToken;
}());
export { NbAuthToken };
export function nbAuthCreateToken(tokenClass, token) {
    return new tokenClass(token);
}
/**
 * Wrapper for simple (text) token
 */
var NbAuthSimpleToken = /** @class */ (function (_super) {
    __extends(NbAuthSimpleToken, _super);
    function NbAuthSimpleToken(token) {
        var _this = _super.call(this) || this;
        _this.token = token;
        return _this;
    }
    /**
     * Returns the token value
     * @returns string
     */
    /**
       * Returns the token value
       * @returns string
       */
    NbAuthSimpleToken.prototype.getValue = /**
       * Returns the token value
       * @returns string
       */
    function () {
        return this.token;
    };
    NbAuthSimpleToken.prototype.getPayload = function () {
        return null;
    };
    /**
     * Is non empty and valid
     * @returns {boolean}
     */
    /**
       * Is non empty and valid
       * @returns {boolean}
       */
    NbAuthSimpleToken.prototype.isValid = /**
       * Is non empty and valid
       * @returns {boolean}
       */
    function () {
        return !!this.getValue();
    };
    /**
     * Validate value and convert to string, if value is not valid return empty string
     * @returns {string}
     */
    /**
       * Validate value and convert to string, if value is not valid return empty string
       * @returns {string}
       */
    NbAuthSimpleToken.prototype.toString = /**
       * Validate value and convert to string, if value is not valid return empty string
       * @returns {string}
       */
    function () {
        return !!this.token ? this.token : '';
    };
    NbAuthSimpleToken.NAME = 'nb:auth:simple:token';
    return NbAuthSimpleToken;
}(NbAuthToken));
export { NbAuthSimpleToken };
/**
 * Wrapper for JWT token with additional methods.
 */
var NbAuthJWTToken = /** @class */ (function (_super) {
    __extends(NbAuthJWTToken, _super);
    function NbAuthJWTToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns payload object
     * @returns any
     */
    /**
       * Returns payload object
       * @returns any
       */
    NbAuthJWTToken.prototype.getPayload = /**
       * Returns payload object
       * @returns any
       */
    function () {
        if (!this.token) {
            throw new Error('Cannot extract payload from an empty token.');
        }
        var parts = this.token.split('.');
        if (parts.length !== 3) {
            throw new Error("The token " + this.token + " is not valid JWT token and must consist of three parts.");
        }
        var decoded;
        try {
            decoded = urlBase64Decode(parts[1]);
        }
        catch (e) {
            throw new Error("The token " + this.token + " is not valid JWT token and cannot be parsed.");
        }
        if (!decoded) {
            throw new Error("The token " + this.token + " is not valid JWT token and cannot be decoded.");
        }
        return JSON.parse(decoded);
    };
    /**
     * Returns expiration date
     * @returns Date
     */
    /**
       * Returns expiration date
       * @returns Date
       */
    NbAuthJWTToken.prototype.getTokenExpDate = /**
       * Returns expiration date
       * @returns Date
       */
    function () {
        var decoded = this.getPayload();
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    /**
     * Is data expired
     * @returns {boolean}
     */
    /**
       * Is data expired
       * @returns {boolean}
       */
    NbAuthJWTToken.prototype.isValid = /**
       * Is data expired
       * @returns {boolean}
       */
    function () {
        return _super.prototype.isValid.call(this) && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    };
    NbAuthJWTToken.NAME = 'nb:auth:jwt:token';
    return NbAuthJWTToken;
}(NbAuthSimpleToken));
export { NbAuthJWTToken };
var prepareOAuth2Token = function (data) {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        }
        catch (e) { }
    }
    return data;
};
var ɵ0 = prepareOAuth2Token;
/**
 * Wrapper for OAuth2 token
 */
var NbAuthOAuth2Token = /** @class */ (function (_super) {
    __extends(NbAuthOAuth2Token, _super);
    function NbAuthOAuth2Token(data) {
        if (data === void 0) { data = {}; }
        var _this = 
        // we may get it as string when retrieving from a storage
        _super.call(this, prepareOAuth2Token(data)) || this;
        _this.data = data;
        return _this;
    }
    /**
     * Returns the token value
     * @returns string
     */
    /**
       * Returns the token value
       * @returns string
       */
    NbAuthOAuth2Token.prototype.getValue = /**
       * Returns the token value
       * @returns string
       */
    function () {
        return this.token.access_token;
    };
    /**
     * Returns the refresh token
     * @returns string
     */
    /**
       * Returns the refresh token
       * @returns string
       */
    NbAuthOAuth2Token.prototype.getRefreshToken = /**
       * Returns the refresh token
       * @returns string
       */
    function () {
        return this.token.refresh_token;
    };
    /**
     * Returns token payload
     * @returns any
     */
    /**
       * Returns token payload
       * @returns any
       */
    NbAuthOAuth2Token.prototype.getPayload = /**
       * Returns token payload
       * @returns any
       */
    function () {
        if (!this.token || !Object.keys(this.token).length) {
            throw new Error('Cannot extract payload from an empty token.');
        }
        return this.token;
    };
    /**
     * Returns the token type
     * @returns string
     */
    /**
       * Returns the token type
       * @returns string
       */
    NbAuthOAuth2Token.prototype.getType = /**
       * Returns the token type
       * @returns string
       */
    function () {
        return this.token.token_type;
    };
    /**
     * Is data expired
     * @returns {boolean}
     */
    /**
       * Is data expired
       * @returns {boolean}
       */
    NbAuthOAuth2Token.prototype.isValid = /**
       * Is data expired
       * @returns {boolean}
       */
    function () {
        return _super.prototype.isValid.call(this) && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    };
    /**
     * Returns expiration date
     * @returns Date
     */
    /**
       * Returns expiration date
       * @returns Date
       */
    NbAuthOAuth2Token.prototype.getTokenExpDate = /**
       * Returns expiration date
       * @returns Date
       */
    function () {
        if (!this.token.hasOwnProperty('expires_in')) {
            return null;
        }
        var date = new Date();
        date.setUTCSeconds(new Date().getUTCSeconds() + Number(this.token.expires_in));
        return date;
    };
    /**
     * Convert to string
     * @returns {string}
     */
    /**
       * Convert to string
       * @returns {string}
       */
    NbAuthOAuth2Token.prototype.toString = /**
       * Convert to string
       * @returns {string}
       */
    function () {
        return JSON.stringify(this.token);
    };
    NbAuthOAuth2Token.NAME = 'nb:auth:oauth2:token';
    return NbAuthOAuth2Token;
}(NbAuthSimpleToken));
export { NbAuthOAuth2Token };
export { ɵ0 };
//# sourceMappingURL=token.js.map