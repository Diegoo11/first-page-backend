const typeDefs = `#graphql
  type Person {
    name: String!
  }

  type Query {
    testPerson: String!
  }
`;

export default typeDefs;
