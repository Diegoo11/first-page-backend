const typeDefs = `#graphql
  type Image {
    src: String!
    srcMobile: String
    alt: String!
    mod: String!
    mId: String!
    link: String
    id: ID!
  }

  type Product {
    sku: String!
    cost: Int!
    stock: Boolean!
    name: String!
    description: String!
    brand: String!
    tags: [String!]
    id: ID!
  }

  type Text {
    name: String!
    description: String!
    link: String
    mod: String!
    mId: String!
    id: ID!
  }
  
  type User {
    username: String!
    password: String!
    cart: [Product]!
    id: ID!
  }

  type Query {
    testPerson: String!

    findSingleImage(
      id: ID!
    ): Image

    findImagesForModule(
      mod: String!
    ): [Image]
  }

  type Mutation {
    createImage(
      src: String!
      srcMobile: String
      alt: String!
      mod: String!
      mId: String!
      link: String
    ): Image

    editImage(
      src: String
      srcMobile: String
      alt: String
      mod: String
      mId: String
      link: String
    ): Image
  }
`;

export default typeDefs;
