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
    tpye: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  brand: {
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
