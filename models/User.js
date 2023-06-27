import { Schema, model } from 'mongoose';

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

export default model('User', schema);
