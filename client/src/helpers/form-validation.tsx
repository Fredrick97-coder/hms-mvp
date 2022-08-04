import * as yup from 'yup';

export const LoginValidation = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be more than 8 characters')
    .required('Password is required'),
});
