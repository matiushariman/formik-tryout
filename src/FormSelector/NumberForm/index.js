/**
 * NumberForm
 */

import React from 'react';
import { Formik, Form } from 'formik';
import './styles.css';
import ValidationSchema from './ValidationSchema';
import DisplayFormikProps from '../../common/DisplayFormikProps';
import NumberField from '../../common/NumberField';

function NumberForm() {
  return (
    <Formik initialValues={{ amount: 0 }} validationSchema={ValidationSchema}>
      {props => (
        <Form autoCapitalize="off" autoComplete="off">
          <div className="NumberForm--Container">
            <div>
              <div className="NumberForm--Field">
                <NumberField
                  placeholder="$50"
                  value={props.values.numbers}
                  name="amount"
                  decimalScale={2}
                  onValueChange={val =>
                    props.setFieldValue('amount', val.floatValue)
                  }
                />
              </div>
              <div>
                {props.errors.amount && (
                  <div className="NumberForm--Error">{props.errors.amount}</div>
                )}
              </div>
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

export default NumberForm;
