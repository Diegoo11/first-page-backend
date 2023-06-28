/* eslint-disable import/extensions */
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import typeDefs from './typeDefs/typeDefs.js';
import resolvers from './resolvers/resolvers.js';
import './db/db.js';

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 1111 },
});

console.log(`Server ready at ${url}`);
