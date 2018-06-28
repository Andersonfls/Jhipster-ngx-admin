/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthTokenClass } from '../../services';
export declare enum NbOAuth2ResponseType {
    CODE = "code",
    TOKEN = "token",
}
export declare enum NbOAuth2GrantType {
    AUTHORIZATION_CODE = "authorization_code",
    REFRESH_TOKEN = "refresh_token",
}
export declare class NbOAuth2AuthStrategyOptions {
    name: string;
    baseEndpoint?: string;
    clientId: string;
    clientSecret: string;
    redirect?: {
        success?: string;
        failure?: string;
    };
    defaultErrors?: any[];
    defaultMessages?: any[];
    authorize?: {
        endpoint?: string;
        redirectUri?: string;
        responseType?: string;
        scope?: string;
        state?: string;
        params?: {
            [key: string]: string;
        };
    };
    token?: {
        endpoint?: string;
        grantType?: string;
        redirectUri?: string;
        class: NbAuthTokenClass;
    };
    refresh?: {
        endpoint?: string;
        grantType?: string;
        scope?: string;
    };
}
export declare const auth2StrategyOptions: NbOAuth2AuthStrategyOptions;
