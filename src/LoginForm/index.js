/**
 * LoginForm
 */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles.css';
import ValidationSchema from './ValidationSchema';
import Input from '../Input';

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ValidationSchema}
    >
      {props => (
        <Form autoCapitalize="off" autoComplete="off">
          <div className="LoginForm--Container">
            <div>
              <div className="LoginForm--Field">
                <Field
                  name="email"
                  type="email"
                  component={Input}
                  label="Email Address"
                />
              </div>
              <div className="LoginForm--Field">
                <Field
                  name="password"
                  type="password"
                  component={Input}
                  label="Password"
                />
              </div>
              <ErrorMessage
                name="email"
                render={msg => <div className="LoginForm--Error">{msg}</div>}
              />
              <ErrorMessage
                name="password"
                render={msg => <div className="LoginForm--Error">{msg}</div>}
              />
            </div>
            <div>
              <pre>
                <strong>props</strong> = {JSON.stringify(props, null, 2)}
              </pre>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
