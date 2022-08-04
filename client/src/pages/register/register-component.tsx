import React from 'react';
import { Formik } from 'formik';
import { TextField } from '../../components';
import { RegisterValidation } from '../../helpers/form-validation';
import { RotateSpinner } from 'react-spinners-kit';
import { MdEmail } from 'react-icons/md';
import { FaUserLock } from 'react-icons/fa';
import '../login/login.scss';
import { Link } from 'react-router-dom';

interface IRegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterComponent: React.FC = () => {
  const initialValues: IRegisterFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <div className="form__wrapper">
      <div className="form__container">
        <h1 className="form__title">Don't worry, you are at the right place</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
          validationSchema={RegisterValidation}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="form">
              <div className="input__wrapper">
                <div className="rounded__icon">
                  <MdEmail size={25} color="#575ce5" />
                </div>
                <TextField
                  name="email"
                  type="email"
                  value={values.email}
                  placeholder="Enter Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  touched={touched}
                  errors={errors}
                  className="form__input"
                />
              </div>
              <div className="input__wrapper">
                <div className="rounded__icon">
                  <FaUserLock size={30} color="#575ce5" />
                </div>
                <TextField
                  name="password"
                  type="password"
                  value={values.password}
                  placeholder="Enter Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  touched={touched}
                  errors={errors}
                  className="form__input"
                />
              </div>
              <div className="input__wrapper">
                <div className="rounded__icon">
                  <FaUserLock size={30} color="#575ce5" />
                </div>
                <TextField
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  placeholder="Enter to confirm Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  touched={touched}
                  errors={errors}
                  className="form__input"
                />
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <RotateSpinner size={20} color="white" />
                ) : (
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span>signup</span>
                  </span>
                )}
              </button>

              <div className="form__footer">
                <p>
                  Already have an account?
                  <Link to="/"> login</Link>
                </p>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
