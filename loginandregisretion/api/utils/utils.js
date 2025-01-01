
// utils/utils.js
import jwt from "jsonwebtoken";

const signToken = (id, role) => {
  const payload = { id, role };
  return jwt.sign(payload, process.env.JWTSECRATE, { expiresIn: process.env.EXPIRESIN });
};

// Use default export for signToken
export default { signToken };

