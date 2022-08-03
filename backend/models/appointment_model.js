import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
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
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
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

export const appointmentModel = mongoose.model(
  'appointment',
  appointmentSchema
);
