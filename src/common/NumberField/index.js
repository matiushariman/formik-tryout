import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export function NumberField(props) {
  const { value, onValueChange, ...rest } = props;

  console.log(props);
  return (
    <NumberFormat
      value={value}
      thousandSeparator
      prefix="$"
      onValueChange={onValueChange}
      {...rest}
    />
  );
}

NumberField.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default NumberField;
