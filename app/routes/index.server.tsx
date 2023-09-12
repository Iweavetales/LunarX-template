import {ServerContext} from "lunarx/server";

export async function serverFetches(ctx: ServerContext) {
  return {
    data: {
      test: "hello"
      // articles: jsonResponse.data,
    },
  };
}
