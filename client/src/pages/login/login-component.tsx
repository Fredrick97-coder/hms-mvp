import React, { useState } from 'react';
import { Formik } from 'formik';
import { TextField } from '../../components';
import { LoginValidation } from '../../helpers/form-validation';
import { MdEmail } from 'react-icons/md';
import { FaUserLock } from 'react-icons/fa';
import './login.scss';
import { Link } from 'react-router-dom';

interface ILoginFormValues {
  email: string;
  password: string;
}

export const LoginComponent: React.FC = () => {
  const initialValues: ILoginFormValues = {
    email: '',
    password: '',
  };

  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [isNext, setIsNext] = useState(false);

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
          validationSchema={LoginValidation}
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
              {!isNext === true ? (
                <div className="input__wrapper">
                  {!emailActive && (
                    <h5 style={{ textAlign: 'center' }}>
                      click on the button to enter email
                    </h5>
                  )}
                  <div
                    className="rounded__icon"
                    onClick={() => setEmailActive((prev) => !prev)}
                  >
                    <MdEmail size={25} color="#575ce5" />
                  </div>
                  {emailActive && (
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
                  )}
                </div>
              ) : (
                <div className="input__wrapper">
                  {!passwordActive && (
                    <h5 style={{ textAlign: 'center' }}>
                      click on the button to enter password
                    </h5>
                  )}
                  <div
                    className="rounded__icon"
                    onClick={() => setPasswordActive((prev) => !prev)}
                  >
                    <FaUserLock size={25} color="#575ce5" />
                  </div>
                  {passwordActive && (
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
                  )}
                </div>
              )}
              {isNext === true ? (
                <button type="submit" className="btn" disabled={isSubmitting}>
                  Submit
                </button>
              ) : (
                <div className="btn" onClick={() => setIsNext((prev) => !prev)}>
                  Next
                </div>
              )}
              <div className="form__footer">
                <p>
                  Don't have an account?
                  <Link to="/signup"> Signup</Link>
                </p>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
