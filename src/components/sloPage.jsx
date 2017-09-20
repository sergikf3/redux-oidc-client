import React from 'react';
import { connect } from 'react-redux';
import userManager from '../utils/userManager';
import { push } from 'react-router-redux';

class SloPage extends React.Component {
	  componentWillMount () {
		    console.log('Slo Completion');
		    userManager.removeUser(); // removes the user data from sessionStorage
		    this.props.dispatch(push('/'));
		  }

  render() {
    return (<div>
          Redirecting...
        </div>
    );
  }
}

export default connect(null)(SloPage);
