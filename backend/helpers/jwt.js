import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
  return token;
};

const verifyToken = (token) => {
  const result = jwt.verify(token, process.env.JWT_SECRET);
  return result;
};

export { generateToken, verifyToken };
