// interface IValidation {
//   email: string;
//   password: string;
//   // confirmPassword?: string;
// }

export const LoginValidation = (values: {
  email: string;
  password: string;
}) => {
  const errors = {
    email: '',
    password: '',
  };
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

// export const RegisterValidation = ({
//   email,
//   password,
//   confirmPassword,
// }: IValidation) => {
//   const errors = {
//     email: '',
//     password: '',
//     confirm_password: '',
//   };

//   if (!email) {
//     errors.email = 'You forgot to type your email';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
//     errors.email = 'Invalid email address';
//   }
//   if (!password) {
//     errors.password = 'Please enter your password';
//   } else if (password.length < 8) {
//     errors.password = 'Your password is too short';
//   }
//   if (!confirmPassword) {
//     errors.confirm_password = 'Confirm your password';
//   } else if (password !== confirmPassword) {
//     errors.confirm_password = 'Password do not match';
//   }

//   return errors;
// };
