/* eslint-disable import/extensions */
import loginAdmin from './mutation/loginAdmin.js';
import loginUser from './mutation/loginUser.js';

import createImage from './mutation/createImage.js';
import createText from './mutation/createText.js';
import createModule from './mutation/createModule.js';
import createItem from './mutation/createItem.js';
import createUser from './mutation/createUser.js';

import editImage from './mutation/editImage.js';
import editText from './mutation/editText.js';
import editModule from './mutation/editModule.js';
import editItem from './mutation/editItem.js';

import findForModule from './queary/findForModule.js';
import findSingleImage from './queary/findSingleImage.js';
import findImagesForModule from './queary/findImagesForModule.js';
import findAllItems from './queary/findAllItems.js';
import findItemById from './queary/findItemById.js';
import findCategory from './queary/findCategory.js';
import findUserData from './queary/findUserData.js';

import addItemToCart from './mutation/addIemToCart.js';

const resolvers = {
  Query: {
    testConnection: () => 'Connected',
    findSingleImage,
    findImagesForModule,
    findForModule,
    findAllItems,
    findItemById,
    findCategory,
    findUserData,
  },
  Mutation: {
    loginAdmin,
    loginUser,
    createImage,
    createText,
    createModule,
    createItem,
    createUser,
    editImage,
    editText,
    editModule,
    editItem,
    addItemToCart,
  },
};

export default resolvers;
