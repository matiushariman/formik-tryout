/**
 * LoginForm
 */

import React from 'react';
import { Formik, Form, Field } from 'formik';
import './styles.css';

function LoginForm() {
  return (
    <Formik initialValues={{ email: '', password: '' }}>
      {props => (
        <Form>
          <div className="LoginForm--Container">
            <div>
              <div>
                <Field name="email" type="email" />
              </div>
              <div>
                <Field name="password" type="password" />
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
