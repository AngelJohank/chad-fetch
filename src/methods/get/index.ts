type Params = {
  [key: string]: string | number | boolean
}

/**
 * Function that makes an HTTP.GET request
 * @param url
 * @param queries
 * @example rest.get<Movies>('url-To-Movies', { page: 1 })
 */
export async function get<T>(url: string, params?: Params) {
  // Generate URL object
  const link = new URL(url)

  // Append searchParams
  if (params) {
    Object.keys(params).forEach(key =>
      link.searchParams.append(key, params[key].toString())
    )
  }

  // Fetch and return response
  const res = await fetch(link.href)
  const parsedRes: T = await res.json()

  return {
    statusCode: res.status,
    response: parsedRes,
  }
}
