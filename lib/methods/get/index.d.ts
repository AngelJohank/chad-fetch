declare type Params = {
    [key: string]: string | number | boolean;
};
/**
 * Function that makes an HTTP.GET request
 * @param url
 * @param queries
 * @example rest.get<Movies>('url-To-Movies', { page: 1 })
 */
export declare function get<T>(url: string, params?: Params): Promise<{
    statusCode: number;
    response: T;
}>;
export {};
//# sourceMappingURL=index.d.ts.map