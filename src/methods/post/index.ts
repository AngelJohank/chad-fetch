import { jsonParams } from './utils'

/**
 * **CURRENTLY ONLY SUPPORTS OBJECTS |**
 * Function that makes an HTTP.POST request
 * @param url
 * @param data
 * @example get.post<Movie>('movie-url/api/post', { title: 'movie title', desc: 'description' })
 */
export async function post<T>(url: string, data: unknown) {
  // check if data exist
  if (!data) throw new Error("REST POST ERROR: THERE'S NO DATA")

  // initialize params
  let params = {}

  // get params according to the data type
  if (typeof data === 'object') params = jsonParams(data)

  // Fetch and return response
  const res = await fetch(url, { method: 'POST', ...params })
  const parsedRes: T = await res.json()

  return { response: parsedRes }
}
