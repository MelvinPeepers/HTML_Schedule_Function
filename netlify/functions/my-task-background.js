exports.handler = async (event, context) => {
  console.log("Background function started")
  await new Promise((resolve) => setTimeout(resolve, 5000))
  console.log("Background function finished")
  return {
    statusCode: 200,
    body: "Done"
  }
}