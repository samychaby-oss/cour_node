import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// const listener = (request, response) => {
//   if (request.url === "/users") {
//     return listUsers(request, response);
//   }
//   return json(response, 404, { message: "not fouded" });
// };

// const server = http.createServer(listener);
// server.listen(3000);

// console.log("Server running at http://127.0.0.1:3000/");
