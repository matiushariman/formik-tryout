/**
 * LoginForm
 */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ValidationSchema from './ValidationSchema';
import '../styles.css';
import DisplayFormikProps from '../../common/DisplayFormikProps';
import Input from '../../common/Input';

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ValidationSchema}
    >
      {props => (
        <Form autoCapitalize="off" autoComplete="off">
          <div className="Form--Container">
            <div>
              <div className="Form--Field">
                <Field
                  name="email"
                  type="email"
                  component={Input}
                  label="Email Address"
                />
              </div>
              <div className="Form--Field">
                <Field
                  name="password"
                  type="password"
                  component={Input}
                  label="Password"
                />
              </div>
              <ErrorMessage
                name="email"
                render={msg => <div className="Form--Error">{msg}</div>}
              />
              <ErrorMessage
                name="password"
                render={msg => <div className="Form--Error">{msg}</div>}
              />
            </div>
            <div>
              <DisplayFormikProps {...props} />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
