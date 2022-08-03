import { ApolloError } from 'apollo-server-errors';
import { patientModel } from '../../../models/patient_model.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../../helpers/jwt.js';
import jwt from 'jsonwebtoken';
import { doctorModel } from '../../../models/doctor_model.js';
import { adminModel } from '../../../models/admin_model.js';

export const REGISTER = async (
  _,
  { registerInput: { email, password, role } }
) => {
  // if the user is a patient
  //I need to check if the patient already exists
  const oldPatient = await patientModel.findOne({ email });

  //Throw an error if the user already exists
  if (oldPatient) {
    throw new ApolloError('User already exists');
  }
  //Encryt the password
  const hashedPassword = await bcrypt.hash(password, 10);

  //Create the newUser object
  const newUser = new patientModel({
    email: email.toLowerCase(),
    password: hashedPassword,
  });
  //Create a jwt
  const accessToken = await generateToken(newUser);
  newUser.token = accessToken;
  //Save the user in the database
  const savedUser = await newUser.save();

  //Return the user and the token
  return {
    id: savedUser._id,
    ...savedUser._doc,
  };
  return savedUser;
  console.log(savedUser);

  throw new ApolloError('You are not authorized to register');
};

export const SIGNIN = async (_, { signinInput: { email, password, role } }) => {
  //What to check if user exist in the database

  let userExist;
  role === 'doctor'
    ? (userExist = await doctorModel.findOne({ email }))
    : role === 'patient'
    ? (userExist = await patientModel.findOne({ email }))
    : (userExist = await adminModel.findOne({ email }));

  //Throw an error if the user does not exist
  if (!userExist) {
    throw new ApolloError('User does not exist');
  }
  //Check if the password is correct
  const passwordMatch = await bcrypt.compare(password, userExist.password);
  if (!passwordMatch) {
    throw new ApolloError('Password is incorrect');
  }
  //Create a jwt
  const accessToken = await generateToken({
    id: userExist._id,
    email,
    role,
  });
  userExist.token = accessToken;

  //Return the user and the token

  // return {
  //   id: userExist._id,
  //   ...userExist._doc,
  // };

  return userExist;

  throw new ApolloError('You are not authorized to sign in');
};
