import express from "express";
import dotenv from "dotenv";
import usersRouter from "./users/users.Router.js";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  message: "users management api";
});
app.use("/users", usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
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
