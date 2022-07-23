import { Params } from './post.types'

export function jsonParams(data: object): Params {
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  }
}
