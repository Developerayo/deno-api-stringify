let body = {
  message: "Welcome to Deno",
};

export async function handler(req: object) {
  return {
    statusCode: 201,
    headers: {
      "content-type": "application/json; charset=utf8",
    },
  };
}
