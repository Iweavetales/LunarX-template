import { LunarContext } from 'lunarx/context';

export async function serverFetches(ctx: LunarContext) {
  return {
    data: {
      test: "hello"
      // articles: jsonResponse.data,
    },
  };
}
