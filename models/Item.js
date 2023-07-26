import { Schema, model } from 'mongoose';

const schema = new Schema({
  sku: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],

});

export default model('Item', schema);
