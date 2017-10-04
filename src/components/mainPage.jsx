import React from 'react';
import { connect } from 'react-redux';
//import userManager from '../utils/userManager';
import { loadUserDataStart } from '../actions';
import UserItemInfo from './userItemInfo';
import Table from 'react-bootstrap/lib/Table';

class MainPage extends React.Component {
  // load the userdata
  componentWillMount() {
    this.props.dispatch(loadUserDataStart());
  }

  // display the current user
  showUserInfoButtonClick = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.props.user, null, 2));
  }

  // the useritems list
  get useritems() {
    const { useritems } = this.props;
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {useritems.map((useritem, index) => (
            <UserItemInfo key={index} useritem={useritem} />
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    const { user, useritems } = this.props;

    return (
      <div >
        <div>
          <h3>Welcome, {user ? user.profile.name : 'Mister Unknown'}!</h3>
          <p>Your 5 most recent user info items:</p>
        </div>
        {useritems.length > 0 ? this.useritems : <i>You have no user info items.</i>}
        <button onClick={this.showUserInfoButtonClick}>Show user info</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user,
    useritems: state.userdata.useritems,
    legacyitems: state.legacydata.legacyitems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
