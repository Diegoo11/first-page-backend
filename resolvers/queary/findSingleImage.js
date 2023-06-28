/* eslint-disable import/extensions */
import { GraphQLError } from 'graphql';
import Image from '../../models/Image.js';

const findSingleImage = async (root, args) => {
  const image = Image.findById(args.id);

  if (!image) {
    throw new GraphQLError('Image not found', {
      extensions: {
        error: 'FILE_NOT_FOUND',
        invalidArgs: args.id,
      },
    });
  }

  return image;
};

export default findSingleImage;
