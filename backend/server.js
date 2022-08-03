import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
dotenv.config();
import { resolvers } from './resolvers/index.js';
import { typeDefs } from './typeDefs/index.js';
import connectDBase from './config/database.js';
import { verifyToken } from './helpers/jwt.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  context: async ({ req }) => {
    if (req?.headers?.authorization) {
      const accessToken = req?.headers?.authorization?.split('')[1];
      let isVerified = verifyToken(accessToken);
      console.log(isVerified);
      return { user: isVerified?.data };
    }
    return {};
  },
});

const dbConnection = await connectDBase();

if (dbConnection) {
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
} else {
  console.log(`error connecting to database`);
}
