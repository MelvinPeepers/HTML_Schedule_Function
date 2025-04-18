export const handler = async (event) => {
    console.error("run Started");
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Background processes triggered for Prod, Staging & Dev" }),
    };
}