/* eslint-disable import/extensions */
import { GraphQLError } from 'graphql';
import Module from '../../models/Module.js';

const findForModule = async (root, { id }) => {
  // const image = await Image.find({ mod: args.mod });
  // const text = await Text.find({ mod: args.mod });
  let module = null;

  try {
    module = await Module.findById(id).populate('image').populate('text');
  } catch (err) {
    throw new GraphQLError('Module not found, because the id is invalid', {
      extensions: {
        code: 'INVALID_IDENTIFIER',
        invalidArgs: id,
      },
    });
  }

  return module;
};

export default findForModule;
