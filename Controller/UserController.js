import prisma from "../db/db.config.js";

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
