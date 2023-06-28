/* eslint-disable import/extensions */
import editImage from './mutation/editImage.js';
import createImage from './mutation/createImage.js';
import findSingleImage from './queary/findSingleImage.js';
import findImagesForModule from './queary/findImagesForModule.js';

const resolvers = {
  Query: {
    testPerson: () => 'test',
    findSingleImage,
    findImagesForModule,
  },
  Mutation: {
    editImage,
    createImage,
  },
};

export default resolvers;
