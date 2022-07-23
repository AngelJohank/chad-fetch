var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsonParams } from './utils';
/**
 * **ONLY WORKS WITH OBJECTS FOR NOW |**
 * Function that makes an HTTP.POST request
 * @param url
 * @param data
 * @example rest.post<Movie>('url-to-Movie/post', { title: 'movie title', desc: 'description' })
 */
export function post(url, data) {
    return __awaiter(this, void 0, void 0, function* () {
        // check if data exist
        if (!data)
            throw new Error("REST POST ERROR: THERE'S NO DATA");
        // initialize params
        let params = {};
        // get params according to the data type
        if (typeof data === 'object')
            params = jsonParams(data);
        // Fetch and return response
        const res = yield fetch(url, Object.assign({ method: 'POST' }, params));
        const parsedRes = yield res.json();
        return {
            statusCode: res.status,
            response: parsedRes,
        };
    });
}
//# sourceMappingURL=index.js.map