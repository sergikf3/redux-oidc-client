import React from 'react';

class LoginPage extends React.Component {
  onLoginButtonClick = (event) => {
    event.preventDefault();
    window.location = 'sso';
  };

  render() {
    return (
      <div className="intloginpage">
        <h3>Welcome to the redux-oidc sample app!</h3>
        <p>Please log in to continue</p>
        <button onClick={this.onLoginButtonClick}>Login</button>
      </div>
    );
  }
}

export default LoginPage;
