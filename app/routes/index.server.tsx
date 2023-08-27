import {ServerContext} from "lunarx/context";

export async function serverFetches(ctx: ServerContext) {
  return {
    data: {
      test: "hello"
      // articles: jsonResponse.data,
    },
  };
}
