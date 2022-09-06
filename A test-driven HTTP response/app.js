// const { createServer } = require("node:http");

// const app = createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-type", "text/html");

//   const jsonResponseBody = JSON.stringify("Welcome to the World Wide Web");
//   response.end(jsonResponseBody);
// });

// app.listen(3000, () => {
//   console.log("Server running at https://localhost:3000");
// });
const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    const textResponse = "Welcome to the World Wide Web";

    response.end(textResponse);
  });
}

module.exports = createApp;
