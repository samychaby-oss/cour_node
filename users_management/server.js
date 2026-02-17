import http from "node:http";
import { json } from "./outils/responses.js";
import { listUsers } from "./users/users.controller.js";

const listener = (request, response) => {
  if (request.url === "/users") {
    return listUsers(request, response);
  }
  return json(response, 404, { message: "not fouded" });
};

const server = http.createServer(listener);
server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");
