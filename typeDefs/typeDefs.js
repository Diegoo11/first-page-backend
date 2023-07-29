const typeDefs = `#graphql
  input ImageInput {
    id: ID!
    src: String!
    alt: String!
    srcMobile: String
    link: String
  }

  input TextInput {
    id: ID!
    name: String!
    description: String!
    link: String
  }

  input TagsInput {
    name: String!
  }

  type Module {
    name: String!
    image: [Image]
    text: [Text]
  }

  type Token {
    value: String!
  }

  type Brand {
    src: String!
    name: String!
    id: ID!
  }

  type Image {
    src: String!
    srcMobile: String
    alt: String!
    link: String
    id: ID!
  }

  type Item {
    sku: String!
    cost: Int!
    src: String!
    stock: Int!
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
    id: ID!
  }

  type Admin {
    username: String!
    password: String!
    id: ID!
  }
  
  type User {
    username: String!
    name: String!
    lastname: String!
    phone: String!
    password: String!
    cart: [Item]!
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

    findAllItems: [Item]

    findItemById(
      id: String!
    ): Item

    findCategory(
      category: String!
    ): [Item]

    findBrands: [Brand]

    findUserData: User
  }

  type Mutation {
    createImage(
      src: String!
      srcMobile: String
      alt: String!
      link: String
    ): Image

    createText(
      name: String!
      description: String
      link: String
    ): Text

    createModule(
      name: String!
    ): Module

    createItem(
      sku: String!
      cost: Int!
      src: String!
      stock: Int!
      name: String!
      description: String!
      brand: String!
      tags: [String]!
    ): Item

    editImage(
      id: String!
      src: String!
      srcMobile: String
      alt: String!
      link: String
    ): Image

    createUser(
      username: String!
      password: String!
      name: String!
      lastname: String!
      phone: String!
    ): Token

    loginAdmin(
      username: String!
      password: String!
    ): Token

    loginUser(
      username: String!
      password: String!
    ): Token

    editText(
      id: String!
      name: String!
      description: String
      link: String
    ): Text
    
    editModule(
      images: [ImageInput]
      texts: [TextInput]
    ): Module

    editItem(
      id: String!
      name: String
      cost: Int
      src: String
      stock: Int
      description: String
      brand: String
      tags: [String]
    ): Item

    addItemToCart(
      itemId: String!
    ): User
  }
`;

export default typeDefs;
