import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const drugSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  expires: {
    type: Date,
  },
  pharmacy: {
    type: Schema.Types.ObjectId,
    ref: 'pharmacy',
    required: true,
  },
});

export const drugModel = mongoose.model('drug', drugSchema);
