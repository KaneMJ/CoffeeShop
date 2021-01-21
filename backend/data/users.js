import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Barnaby",
    email: "johnb@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Barnaby",
    email: "janeb@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
