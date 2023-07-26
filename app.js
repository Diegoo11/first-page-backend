/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';
import typeDefs from './typeDefs/typeDefs.js';
import resolvers from './resolvers/resolvers.js';
import './db/db.js';
import User from './models/User.js';

// dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = Number(process.env.PORT);

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT || 1111 },
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.toLocaleLowerCase().startsWith('bearer')) {
      const tk = auth.substring(7);

      const { JWT_SECRET } = process.env;
      const decodedToken = jwt.decode(tk, JWT_SECRET);

      if (!decodedToken) {
        throw new GraphQLError('Not Authenticated', {
          extensions: {
            code: 'AUTHENTICATION_ERROR',
          },
        });
      }

      const { id } = decodedToken;
      const currentUser = await User.findById(id);
      return { currentUser };
    }
  },
  introspection: true,
});

console.log(`Server ready at ${url}`);
