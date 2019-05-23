import React from 'react';
import LoginForm from './LoginForm';
import NumberForm from './NumberForm';

export class FormSelector extends React.PureComponent {
  state = {
    isLoginForm: true,
  };

  handleSwitchForm = () => {
    this.setState(prevState => ({
      isLoginForm: !prevState.isLoginForm,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.handleSwitchForm}>Switch Form</button>
        </div>
        <div>{this.state.isLoginForm ? <LoginForm /> : <NumberForm />}</div>
      </React.Fragment>
    );
  }
}

export default FormSelector;
