# Chad Fetch [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?style=flat-square)](https://github.com/AngelJohank/chad-fetch/blob/main/LICENCE)

A **tiny** version of **fetch** for the browser (not a pollyfill)

![Logo](https://cdn3.emoji.gg/emojis/8748_gigachad.png)

## Installation

```bash
  npm install chad-fetch
```

## Usage

```typescript
import fetch from 'chad-fetch'

// fetch.get(url, queryParams?) returns T
fetch
  .get<T>('https://rickandmortyapi.com/api/character', { page: 1 })
  .then(res => console.log(res))

// fetch.post(url, data) returns T | only uploads objects
fetch
  .post<T>('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  .then(res => console.log(res))
```
