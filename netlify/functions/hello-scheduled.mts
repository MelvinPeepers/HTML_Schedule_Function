import type { Config } from "@netlify/functions"

export default async function handler(req: Request): Promise<Response> {
  const now = new Date().toISOString()
  console.log(`[Scheduled Function] Hello! The time is: ${now}`)

  return new Response("Scheduled function ran successfully")
}

// Run every hour
export const config: Config = {
  schedule: "@hourly"
};