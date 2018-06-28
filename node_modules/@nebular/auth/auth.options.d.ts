import { InjectionToken } from '@angular/core';
import { NbAuthStrategy, NbAuthStrategyOptions } from './strategies';
import { NbAuthTokenClass } from './services';
export declare type NbAuthStrategyClass = new (...params: any[]) => NbAuthStrategy;
export declare type NbAuthStrategies = [NbAuthStrategyClass, NbAuthStrategyOptions][];
export interface NbAuthOptions {
    forms?: any;
    strategies?: NbAuthStrategies;
}
export interface NbAuthSocialLink {
    link?: string;
    url?: string;
    target?: string;
    title?: string;
    icon?: string;
}
export declare const defaultAuthOptions: any;
export declare const NB_AUTH_OPTIONS: InjectionToken<NbAuthOptions>;
export declare const NB_AUTH_USER_OPTIONS: InjectionToken<NbAuthOptions>;
export declare const NB_AUTH_STRATEGIES: InjectionToken<[NbAuthStrategyClass, NbAuthStrategyOptions][]>;
export declare const NB_AUTH_TOKENS: InjectionToken<NbAuthTokenClass[]>;
export declare const NB_AUTH_INTERCEPTOR_HEADER: InjectionToken<[NbAuthStrategyClass, NbAuthStrategyOptions][]>;
