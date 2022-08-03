import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    surname: {
      type: String,
    },
    firstname: {
      type: String,
    },
    othernames: { type: String },
    age: {
      type: Number,
    },
    gender: {},
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    contact: {
      type: String,
    },
    image: {
      type: String,
      default:
        'https://res.cloudinary.com/dzqbzqgjm/image/upload/v1559098981/default_avatar_mjqjqz.png',
    },
    token: {
      type: String,
    },
    reports: [
      {
        type: Schema.Types.ObjectId,
        ref: 'report',
      },
    ],
    appointments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'appointment',
      },
    ],
    prescriptions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'doctor',
      },
    ],
    labResults: [
      {
        type: Schema.Types.ObjectId,
        ref: 'lab',
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    role: {
      type: String,
      default: 'patient',
    },
  },
  []
);

export const patientModel = mongoose.model('patient', patientSchema);
