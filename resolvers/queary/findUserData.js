import { GraphQLError } from 'graphql';

const findUserData = async (root, args, context) => {
  const { currentUser } = context;
  const userWithCart = await currentUser.populate('cart');
  if (!currentUser) {
    throw new GraphQLError('Not autenticate', {
      extensions: {
        code: 'ATENTIATE_ERROR',
        http: { status: 401 },
      },
    });
  }
  return userWithCart;
};

export default findUserData;
