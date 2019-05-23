import React from 'react';
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

export default NumberField;
