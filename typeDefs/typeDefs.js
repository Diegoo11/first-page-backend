const typeDefs = `#graphql
  type Module {
    name: String!
    image: [Image]
    text: [Text]
  }

  type Token {
    value: String!
  }

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

  type Admin {
    username: String!
    password: String!
    id: ID!
  }
  
  type User {
    username: String!
    password: String!
    cart: [Product]!
    id: ID!
  }

  type Query {
    testConnection: String!

    findSingleImage(
      id: ID!
    ): Image

    findImagesForModule(
      mod: String!
    ): [Image]

    findForModule(
      id: String!
    ): Module
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

    createText(
      name: String!
      description: String
      link: String
      mod: String!
      mId: String!
    ): Text

    createModule(
      name: String!
    ): Module

    editImage(
      id: String!
      src: String!
      srcMobile: String
      alt: String!
      link: String
    ): Image

    loginAdmin(
      username: String!
      password: String!
    ): Token

    editText(
      id: String!
      name: String!
      description: String
      link: String
    ): Text

  }
`;

export default typeDefs;
