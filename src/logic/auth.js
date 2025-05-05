// Simple in-memory store (for demonstration purposes only)
let users = [];

export const registerUser = ({ email, password }) => {
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error("Email already registered");
  }
  const newUser = { email, password };
  users.push(newUser);
  return newUser;
};

export const loginUser = ({ email, password }) => {
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );
  if (!user) {
    throw new Error("Invalid email or password");
  }
  return user;
};
