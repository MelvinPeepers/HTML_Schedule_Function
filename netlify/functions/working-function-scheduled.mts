import type { Config } from "@netlify/functions";
// Imports the TypeScript type for the config object so Netlify knows how to interpret scheduling info.

const notifyTest = async () => {
    console.log(`started at ${new Date().toISOString()}`);
};
// Defines an async function that logs the start timestamp to the function logs — this is what shows in the Netlify Function log UI.

export default notifyTest;
// Exports the function so Netlify knows what to run.

export const config: Config = {
    schedule: "0/5 * * * *",
};
// Defines the schedule inline via config. This method is explicitly supported by Netlify’s Scheduled Functions system and is required for the logs to appear in the UI’s Function log tab.