exports.handler = async (event, context) => {
    console.log("Function execution");
    console.log("Function started");
    await new Promise ((resolve) => setTimeout(resolve, 3500)); // 500ms delay
    console.log("Function completed");
    console.log("Function execution");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from your Netlify Serverless Function!",
      timestamp: new Date().toISOString(),
    }),
  };
};