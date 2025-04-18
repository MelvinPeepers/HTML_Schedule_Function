export default async function handler(): Promise<Response> {
  console.log("Calling wife... 💖");
  return new Response("Called wife!");
}

export const config: Config = {
  schedule: [
    "0 0 * * *",
  ]
};