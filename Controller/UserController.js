import prisma from "../db/db.config.js";

// * Get all users
export const fetchusers = async (req, res) => {
  const users = await prisma.user.findMany({});
  return res.status(200).json({ data: users });
};

// * Show a single user
export const fetchuser = async (req, res) => {
  const userId = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ data: user });
};

export const createuser = async (req, res) => {
  const { name, email, password } = req.body;
  const finduser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (finduser) {
    return res.status(400).json({ message: "Email already exists" });
  }
  const newuser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return res
    .status(201)
    .json({ data: newuser, message: "User created successfully" });
};

// * User update controller
export const updateuser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;
  const finduser = await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      name,
      email,
      password,
    },
  });
  if (!finduser) {
    return res.status(404).json({ message: "User not found" });
  }
  return res
    .status(200)
    .json({ data: finduser, message: "User updated successfully" });
};

// * Delete a user
export const deleteuser = async (req, res) => {
  const userId = req.params.id;
  const finduser = await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });
  if (!finduser) {
    return res.status(404).json({ message: "User not found" });
  }
  return res
    .status(200)
    .json({ data: finduser, message: "User deleted successfully" });
};
