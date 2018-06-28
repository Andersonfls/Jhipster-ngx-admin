export declare abstract class NbAuthToken {
    abstract getValue(): string;
    abstract isValid(): boolean;
    abstract getPayload(): string;
    abstract toString(): string;
    getName(): string;
}
export interface NbAuthRefreshableToken {
    getRefreshToken(): string;
}
export interface NbAuthTokenClass {
    NAME: string;
    new (raw: any): NbAuthToken;
}
export declare function nbAuthCreateToken(tokenClass: NbAuthTokenClass, token: any): NbAuthToken;
/**
 * Wrapper for simple (text) token
 */
export declare class NbAuthSimpleToken extends NbAuthToken {
    protected readonly token: any;
    static NAME: string;
    constructor(token: any);
    /**
     * Returns the token value
     * @returns string
     */
    getValue(): string;
    getPayload(): string;
    /**
     * Is non empty and valid
     * @returns {boolean}
     */
    isValid(): boolean;
    /**
     * Validate value and convert to string, if value is not valid return empty string
     * @returns {string}
     */
    toString(): string;
}
/**
 * Wrapper for JWT token with additional methods.
 */
export declare class NbAuthJWTToken extends NbAuthSimpleToken {
    static NAME: string;
    /**
     * Returns payload object
     * @returns any
     */
    getPayload(): any;
    /**
     * Returns expiration date
     * @returns Date
     */
    getTokenExpDate(): Date;
    /**
     * Is data expired
     * @returns {boolean}
     */
    isValid(): boolean;
}
/**
 * Wrapper for OAuth2 token
 */
export declare class NbAuthOAuth2Token extends NbAuthSimpleToken {
    protected data: {
        [key: string]: string | number;
    } | string;
    static NAME: string;
    constructor(data?: {
        [key: string]: string | number;
    } | string);
    /**
     * Returns the token value
     * @returns string
     */
    getValue(): string;
    /**
     * Returns the refresh token
     * @returns string
     */
    getRefreshToken(): string;
    /**
     * Returns token payload
     * @returns any
     */
    getPayload(): any;
    /**
     * Returns the token type
     * @returns string
     */
    getType(): string;
    /**
     * Is data expired
     * @returns {boolean}
     */
    isValid(): boolean;
    /**
     * Returns expiration date
     * @returns Date
     */
    getTokenExpDate(): Date;
    /**
     * Convert to string
     * @returns {string}
     */
    toString(): string;
}
