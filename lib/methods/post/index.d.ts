/**
 * **ONLY WORKS WITH OBJECTS FOR NOW |**
 * Function that makes an HTTP.POST request
 * @param url
 * @param data
 * @example rest.post<Movie>('url-to-Movie/post', { title: 'movie title', desc: 'description' })
 */
export declare function post<T>(url: string, data: unknown): Promise<{
    statusCode: number;
    response: T;
}>;
//# sourceMappingURL=index.d.ts.map