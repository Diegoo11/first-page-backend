import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  srcMobile: {
    type: String,
  },
  alt: {
    type: String,
    required: true,
  },
  mod: {
    type: String,
    required: true,
  },
  mId: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});

export default mongoose.model('Image', schema);
