/**
 * LoginForm
 */

import React from 'react';
import { Formik, Form, Field } from 'formik';
import './styles.css';
import Input from '../Input';

function LoginForm() {
  return (
    <Formik initialValues={{ email: '', password: '' }}>
      {props => (
        <Form>
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
