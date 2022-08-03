import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pharmacySchema = new Schema({
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
  drugs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'drug',
      required: true,
    },
  ],
  extDrugs: [],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const pharmacyModel = mongoose.model('pharmacy', pharmacySchema);
// Compare this snippet from backend/models/drug_model.js:
