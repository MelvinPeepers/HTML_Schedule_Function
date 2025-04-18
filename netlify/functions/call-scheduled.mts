import type { Config } from "@netlify/functions";


export default async function handler(): Promise<Response> {
  // Call my wife
  console.log("Calling wife... 💖");

  return new Response("Called wife!");
}

export const config: Config = {
  schedule: "@hourly"
};