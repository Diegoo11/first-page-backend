import { Schema, model } from 'mongoose';

const schema = new Schema({
  sku: {
    type: String,
    required: true,
    unique: true,
    maxlength: 20,
  },
  cost: {
    type: Number,
    required: true,
    maxlength: 20,
  },
  stock: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    maxlength: 300,
  },
  brand: {
    type: String,
    required: true,
    maxlength: 20,
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
