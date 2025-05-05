// // ph-scheduled.mts
// import type { Config } from "@netlify/functions";

// // This is the main function Netlify will invoke on schedule.
// // It must be exported as a named function called `handler`.
// export async function handler(): Promise<Response> {
//   // Log a message to the Netlify function logs for visibility when the function runs.
//   console.error("run Started");

//   // Return an HTTP response. While scheduled functions don't have a user-facing response,
//   // returning a response object is still required by the function runtime.
//   return new Response(
//     JSON.stringify({
//       message: "Background processes triggered for Prod, Staging & Dev"
//     }),
//     {
//       status: 200 // Indicates success
//     }
//   );
// }

// // This `config` export tells Netlify how to schedule the function.
// // The `@hourly` cron string means the function will run once every hour.
// // You can customize this using cron syntax (e.g., "0 8 * * *" for 8AM daily).
// export const config: Config = {
//   schedule: "@hourly" // Runs the function automatically every hour
// };


// netlify/functions/ph-scheduled.mts
import type { Config } from "@netlify/functions";

export default async function handler(): Promise<Response> {
  console.log("ph-scheduled function triggered");
  return new Response("OK");
}

export const config: Config = {
  schedule: "@hourly"
};