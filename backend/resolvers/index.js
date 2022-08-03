import { doctorModel } from '../models/doctor_model.js';
import { patientModel } from '../models/patient_model.js';
import { REGISTER, SIGNIN } from './mutations/Auth/auth.js';
import { GET_ALL_DOCTORS, GET_ALL_PATIENTS } from './queries/index.js';

export const resolvers = {
  LOGIN_USER: {
    __resolveType(obj, context, info) {
      const { role } = obj;
      return role === 'student'
        ? 'Student'
        : role === 'doctor'
        ? 'Doctor'
        : 'Admin';
    },
  },
  Query: {
    getAllPatients: GET_ALL_PATIENTS,
    totalPatients: async () => {
      return patientModel.countDocuments();
    },
    getAllDoctors: GET_ALL_DOCTORS,
    totalDocs: async () => {
      return doctorModel.countDocuments();
    },
  },
  Mutation: {
    register: REGISTER,
    signin: SIGNIN,
  },
};
