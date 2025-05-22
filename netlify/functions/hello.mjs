export async function handler(event, context) {
    console.log("Function execution");
    console.log("Function started");
    await new Promise ((resolve) => setTimeout(resolve, 6500)); // 500ms delay
    console.log("Function completed");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from your Netlify Serverless Function!",
      timestamp: new Date().toISOString(),
    }),
  };
};