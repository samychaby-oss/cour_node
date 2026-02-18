// const users = [
//   {
//     id: 1,
//     name: "samy",
//     email: "john@test.com",
//   },
//   {
//     id: 2,
//     name: "testo",
//     email: "testo@test.com",
//   },
// ];

// export function getUsers() {
//   return users;
// }

import { prisma } from "../utils/prisma.js";

export async function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function createUser(userData) {
  return prisma.user.create({
    data: userData,
  });
}
