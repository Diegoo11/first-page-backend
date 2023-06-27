import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  link: {
    type: String,
  },
  mod: {
    type: String,
    required: true,
  },
  mId: {
    type: String,
    required: true,
  },
});

export default model('Text', schema);
