# Deno API Stringify

## Current Response

```json
{"body":{"message":"Welcome to Deno"}}
```

## Resource

```js
export async function handler (req: object) {
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    },
    body: JSON.stringify({body}), 
  }
}
```