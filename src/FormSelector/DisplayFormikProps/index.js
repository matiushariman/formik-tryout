import React from 'react';

export function DisplayFormikProps(props) {
  return (
    <pre>
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  );
}

export default DisplayFormikProps;
