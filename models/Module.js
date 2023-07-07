import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Image',
    },
  ],
  text: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Text',
    },
  ],
});

export default model('Model', schema);
