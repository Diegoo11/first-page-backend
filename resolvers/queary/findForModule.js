/* eslint-disable import/extensions */
import { GraphQLError } from 'graphql';
import Image from '../../models/Image.js';
import Text from '../../models/Text.js';

const findForModule = async (root, args) => {
  const image = await Image.find({ mod: args.mod });
  const text = await Text.find({ mod: args.mod });
  if (image.length === 0) {
    throw new GraphQLError('No existe el modulo', {
      extensions: {
        code: 'USER_INPUT_ERROR',
        invalidArgs: args.mod,
      },
    });
  }
  const res = {
    image,
    text,
  };
  return res;
};

export default findForModule;
