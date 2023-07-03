/* eslint-disable import/extensions */
import editImage from './mutation/editImage.js';
import createImage from './mutation/createImage.js';
import findSingleImage from './queary/findSingleImage.js';
import findImagesForModule from './queary/findImagesForModule.js';
import loginAdmin from './mutation/loginAdmin.js';
import createText from './mutation/createText.js';
import findForModule from './queary/findForModule.js';
import editText from './mutation/editText.js';

const resolvers = {
  Query: {
    testPerson: () => 'test',
    findSingleImage,
    findImagesForModule,
    findForModule,
  },
  Mutation: {
    loginAdmin,
    editImage,
    editText,
    createImage,
    createText,
  },
};

export default resolvers;
