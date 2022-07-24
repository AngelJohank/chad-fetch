const paramsTemplate = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  },
  body: '',
}

export function jsonParams(data: object) {
  return { ...paramsTemplate, body: JSON.stringify(data) }
}
