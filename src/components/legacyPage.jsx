import React from 'react';
import { connect } from 'react-redux';
import { loadLegacyDataStart, cleanLegacyDataStart } from '../actions';
import LegacyitemInfo from './legacyitemInfo';
import Table from 'react-bootstrap/lib/Table';

class LegacyPage extends React.Component {
  // load the userdata
  componentWillMount() {
  }

  retrieveLegacyInfoButtonClick = (event) => {
    event.preventDefault();
    this.props.dispatch(loadLegacyDataStart());
  }

  cleanLegacyInfoButtonClick = (event) => {
    event.preventDefault();
    this.props.dispatch(cleanLegacyDataStart());
  }

  // the legacy items list
  get legacyitems() {
    const { legacyitems } = this.props;
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
          {legacyitems.map((legacyitem, index) => (<LegacyitemInfo key={index} legacyitem={legacyitem} />))}
        </tbody>
      </Table>
    );
  }

  render() {
    const { user, legacyitems } = this.props;

    var legacyOutput;
    if (legacyitems.length > 0) {
      legacyOutput = <ul className="list">
        {this.legacyitems}
        <button onClick={this.cleanLegacyInfoButtonClick}>Clean legacy info</button>
      </ul>;
    } else {
      legacyOutput = <ul className="list">
        <i>You have no legacy items.</i>
        <p />
        <button onClick={this.retrieveLegacyInfoButtonClick}>Retrieve legacy info</button>
      </ul>;
    }

    return (
      <div>
        <div>
          <h3>Welcome, {user ? user.profile.name : 'Mister Unknown'}!</h3>
          <p>Your legacy items:</p>
          {legacyOutput}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LegacyPage);
