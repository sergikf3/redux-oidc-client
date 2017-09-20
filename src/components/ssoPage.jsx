import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import userManager from '../utils/userManager';

class SsoPage extends React.Component {
	  componentWillMount () {
		    console.log('Sso Initialization');
		    userManager.signinRedirect();
		  }

  render() {
    // just redirect to '/' in both cases
    return (        <div>
          Redirecting...
        </div>
    );
  }
}

export default connect(null)(SsoPage);
