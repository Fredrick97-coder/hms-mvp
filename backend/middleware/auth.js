import { verifyToken } from '../helpers/jwt.js';

export const context = async ({ req }) => {
  if (req?.headers?.authorization) {
    const accessToken = req?.headers?.authorization?.split('')[1];
    let isVerified = verifyToken(accessToken);
    console.log(isVerified);
    return { user: isVerified?.data };
  }
  return {};
};
