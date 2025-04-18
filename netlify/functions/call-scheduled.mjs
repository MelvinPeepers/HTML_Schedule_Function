// call-scheduled.mjs
export default async function handler() {
  // Call my wife
  console.log("Calling wife... 💖");

  return new Response("Called wife!");
}

export const config = {
  schedule: [
    "0 0 * * *",   // 00:00 UTC
    "0 6 * * *",   // 06:00 UTC
    "0 12 * * *",  // 12:00 UTC
    "0 18 * * *"   // 18:00 UTC
  ]
};