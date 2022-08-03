import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  surname: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  othernames: { type: String },
  title: {
    type: String,
  },
  languages: [],
  speciality: [],
  bio: {
    type: String,
  },
  contact: [
    {
      type: String,
    },
  ],
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
    default:
      'https://res.cloudinary.com/dzqbzqgjm/image/upload/v1559098981/default_avatar_mjqjqz.png',
  },
  appointment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'appointment',
    },
  ],
  reports: [
    {
      type: Schema.Types.ObjectId,
      ref: 'report',
    },
  ],
  patientsLabResult: [
    {
      type: Schema.Types.ObjectId,
      ref: 'lab',
    },
  ],
  patientsPrescription: [
    {
      type: Schema.Types.ObjectId,
      ref: 'pharmacy',
    },
  ],
  token: {
    type: String,
  },
  role: {
    type: String,
    default: 'doctor',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const doctorModel = mongoose.model('doctor', doctorSchema);
// Compare this snippet from backend/models/appointment_model.js:
// Compare this snippet from backend/models/report_model.js:
// Compare this snippet from backend/models/lab_model.js:
// Compare this snippet from backend/models/pharmacy_model.js:
// Compare this snippet from backend/models/drug_model.js:
// Compare this snippet from backend/models/patient_model.js:
