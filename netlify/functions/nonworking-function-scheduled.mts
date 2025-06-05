// import type { Config } from "@netlify/functions";

// const notifySlack = async () => {
//     console.log("execution starts");
// };

// export default notifySlack;

// [functions."notifySlack"]
//   schedule = "*/5 * * * *"

import type { Config } from "@netlify/functions";

const notifySlack = async () => {
    console.log("execution starts");
};

export default notifySlack;

// Option A: define schedule inline for Netlify UI logs
export const config: Config = {
    schedule: "*/5 * * * *",
};