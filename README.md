# Deno API Stringify

## Get Started

Demo: 

Clone the repository:

```bash 
git clone git@github.com:Developerayo/deno-api-stringify.git && cd deno-api-stringify
```

Install the dependencies:

```bash 
npm install or yarn install
```

To start the project run following command in your terminal:

```bash 
yarn start
```

Now Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

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

## Creating a New Route

```js
export async function handler (req: object) {
  return {
    statusCode: 302,
    headers: {
      'location': '/route',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}

```