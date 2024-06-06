import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET (_req, ctx) {
    const res = await ctx.render();
    res.headers.set("X-Custom-Header", "Ashish");
    return res;
  }
}

export default function About() {
  return <h1>About the app</h1>
}