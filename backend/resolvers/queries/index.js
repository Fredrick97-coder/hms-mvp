import { doctorModel } from '../../models/doctor_model.js';
import { patientModel } from '../../models/patient_model.js';

export const GET_ALL_PATIENTS = async (_, args, context) => {
  const patients = await patientModel.find({});
  return patients;
};

export const GET_ALL_DOCTORS = async (_, args, context) => {
  const doctors = await doctorModel.find({});
  return doctors;
};
