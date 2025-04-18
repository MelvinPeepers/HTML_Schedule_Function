// export const handler = async (event) => {
//     console.error("run Started");
//     return {
//         statusCode: 200,
//         body: JSON.stringify({ message: "Background processes triggered for Prod, Staging & Dev" }),
//     };
// }



// ph-scheduled.js

export default async function handler() {
    console.error("run Started");
  
    return new Response(
      JSON.stringify({ message: "Background processes triggered for Prod, Staging & Dev" }),
      { status: 200 }
    );
  }
  
  export const config = {
    schedule: "@hourly" // or your custom cron string
  };