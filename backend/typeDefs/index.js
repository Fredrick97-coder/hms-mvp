import { gql } from 'apollo-server';

export const typeDefs = gql`
  # type of patient
  type Patient {
    _id: String
    surname: String
    firstname: String
    othernames: String
    email: String
    password: String
    token: String
    role: String
  }

  # type of doctor
  type Doctor {
    _id: String
    surname: String
    firstname: String
    othernames: String
    title: String
    languages: [String]
    speciality: [String]
    bio: String
    contact: [String]
    email: String
    password: String
    image: String
    appointment: [String]
    reports: [String]
    patientsLabResult: [String]
    patientsPrescription: [String]
    token: String
    role: String
  }

  type Admin {
    _id: String
    email: String
    password: String
    token: String
    role: String
  }

  type Query {
    getAllPatients: [Patient]
    totalPatients: Int
    getAllDoctors: [Doctor]
    totalDocs: Int
  }

  union LOGIN_USER = Patient | Doctor | Admin

  input RegisterInput {
    email: String
    password: String
    role: String
  }

  input SigninInput {
    email: String
    password: String
    role: String
  }

  type Mutation {
    register(registerInput: RegisterInput): Patient
    signin(signinInput: SigninInput): LOGIN_USER
  }
`;
