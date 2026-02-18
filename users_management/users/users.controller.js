// import { getUsers } from "./users.service.js";
// import { json } from "../outils/responses.js";

// export function listUsers(request, response) {
//   if (request.method !== "GET") {
//     return json(response, 405, { message: "Method Not Allowed" });
//   }

//   const users = getUsers();
//   return json(response, 200, { data: users });
// }

import { createUser, findUserByEmail } from "./users.service.js";
import { validateUser } from "./users.validation.js";

export async function handLeCreateUser(req, res) {
  try {
    const result = validateUser(req.body);
    if (!result.ok) {
      return res.status(400).json({
        message: "validation failed",
        errors: result.errors,
      });
    }
    //check if user already exists
    const existingUser = await findUserByEmail(req.body.email);
    if (existingUser) {
      return res.status(409).json({ message: "user already exists" });
    }
    //creat user
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
