export default async function handler(req) {
    // Call my wife
    console.log("Calling wife... 💖");
  
    return new Response("Called wife!");
  }
  
  export const config = {
    schedule: "@daily" // Runs once a day
  };