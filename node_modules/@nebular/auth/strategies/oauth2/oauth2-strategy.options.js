/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthOAuth2Token } from '../../services';
export var NbOAuth2ResponseType;
(function (NbOAuth2ResponseType) {
    NbOAuth2ResponseType["CODE"] = "code";
    NbOAuth2ResponseType["TOKEN"] = "token";
})(NbOAuth2ResponseType || (NbOAuth2ResponseType = {}));
// TODO: password, client_credentials
// TODO: password, client_credentials
export var NbOAuth2GrantType;
// TODO: password, client_credentials
(function (NbOAuth2GrantType) {
    NbOAuth2GrantType["AUTHORIZATION_CODE"] = "authorization_code";
    NbOAuth2GrantType["REFRESH_TOKEN"] = "refresh_token";
})(NbOAuth2GrantType || (NbOAuth2GrantType = {}));
var NbOAuth2AuthStrategyOptions = /** @class */ (function () {
    function NbOAuth2AuthStrategyOptions() {
        this.baseEndpoint = '';
        this.clientId = '';
        this.clientSecret = '';
        this.redirect = {
            success: '/',
            failure: null,
        };
        this.defaultErrors = ['Something went wrong, please try again.'];
        this.defaultMessages = ['You have been successfully authenticated.'];
        this.authorize = {
            endpoint: 'authorize',
            responseType: NbOAuth2ResponseType.CODE,
        };
        this.token = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
            class: NbAuthOAuth2Token,
        };
        this.refresh = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.REFRESH_TOKEN,
        };
    }
    return NbOAuth2AuthStrategyOptions;
}());
export { NbOAuth2AuthStrategyOptions };
export var auth2StrategyOptions = new NbOAuth2AuthStrategyOptions();
//# sourceMappingURL=oauth2-strategy.options.js.map