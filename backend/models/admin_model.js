import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  role: {
    type: String,
    default: 'admin',
  },
});

export const adminModel = mongoose.model('admin', adminSchema);
