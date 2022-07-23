var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Function that makes an HTTP.GET request
 * @param url
 * @param queries
 * @example rest.get<Movies>('url-To-Movies', { page: 1 })
 */
export function get(url, params) {
    return __awaiter(this, void 0, void 0, function* () {
        // Generate URL object
        const link = new URL(url);
        // Append searchParams
        if (params) {
            Object.keys(params).forEach(key => link.searchParams.append(key, params[key].toString()));
        }
        // Fetch and return response
        const res = yield fetch(link.href);
        const parsedRes = yield res.json();
        return {
            statusCode: res.status,
            response: parsedRes,
        };
    });
}
//# sourceMappingURL=index.js.map