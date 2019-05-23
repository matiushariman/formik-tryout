import React from 'react';
import LoginForm from './LoginForm';

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
        <div>{this.state.isLoginForm ? <LoginForm /> : null}</div>
      </React.Fragment>
    );
  }
}

export default FormSelector;
