import type { Config } from "@netlify/functions";

// Scheduled function that logs and returns a basic message
export default async function handler(): Promise<Response> {
  const now = new Date().toISOString();
  console.log(`[Scheduled Function] Ran at ${now}`);

  return new Response(
    JSON.stringify({
      status: "success",
      message: "Scheduled function ran as expected.",
      timestamp: now
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}

// Schedule to run every hour (you can change to "@daily" or a cron string)
export const config: Config = {
  schedule: "@hourly"
};

