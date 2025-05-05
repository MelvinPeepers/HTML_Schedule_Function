// export const handler = async (event) => {
//     console.error("run Started");
//     return {
//         statusCode: 200,
//         body: JSON.stringify({ message: "Background processes triggered for Prod, Staging & Dev" }),
//     };
// }



// ph-scheduled.js

// export default async function handler() {
//     console.error("run Started");
  
//     return new Response(
//       JSON.stringify({ message: "Background processes triggered for Prod, Staging & Dev" }),
//       { status: 200 }
//     );
//   }
  
//   export const config = {
//     schedule: "@hourly" // or your custom cron string
//   };



// ph-scheduled.mjs

// background-task.mts

// This is the main function Netlify will invoke on schedule.
// It must be exported as a named function called `handler`.
export async function handler(): Promise<Response> {
  // Log a message to the Netlify function logs for visibility when the function runs.
  console.error("run Started");

  // Return an HTTP response. While scheduled functions don't have a user-facing response,
  // returning a response object is still required by the function runtime.
  return new Response(
    JSON.stringify({
      message: "Background processes triggered for Prod, Staging & Dev"
    }),
    {
      status: 200 // Indicates success
    }
  );
}

// This `config` export tells Netlify how to schedule the function.
// The `@hourly` cron string means the function will run once every hour.
// You can customize this using cron syntax (e.g., "0 8 * * *" for 8AM daily).
export const config = {
  schedule: "@hourly" // Runs the function automatically every hour
};