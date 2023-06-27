import { Schema, model } from 'mongoose';

const schema = new Schema({
  sku: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
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
});

export default model('Product', schema);
