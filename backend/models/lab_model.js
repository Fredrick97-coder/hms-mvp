import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const labSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  result: {
    type: String,
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'patient',
    required: true,
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'doctor',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const labModel = mongoose.model('lab', labSchema);
