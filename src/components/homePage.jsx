import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './loginPage';
import MainPage from './mainPage';
import LegacyPage from './legacyPage';
import { Link, IndexLink } from 'react-router';
//import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Tab from 'react-bootstrap/lib/Tab';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import userManager from '../utils/userManager';
import configuration from 'configuration';

class Navigation extends React.Component {

	handleLogout() {
		console.log('Slo Initialization');
		userManager.removeUser(); // removes the user data from sessionStorage
		window.location = configuration.logoutUrl;
	}

	render() {
		return (
			<Tab.Container className="navarea" defaultActiveKey="first">
				<Row >
					<Col className="navtitles" sm={4}>
						<Nav bsStyle="pills" stacked>
							<NavItem eventKey="first">
								Static page
			          </NavItem>
							<NavItem eventKey="second">
								Main page
					  </NavItem>
							<NavItem eventKey="legacy">
								Legacy page
					  </NavItem>
							<a className="navlogout" href="javascript:void(0)" onClick={this.handleLogout.bind(this)}>Logout</a>
						</Nav>
					</Col>
					<Col className="navcontent" sm={8}>
						<Tab.Content animation>
							<Tab.Pane eventKey="first">
								Static page content
			          </Tab.Pane>
							<Tab.Pane eventKey="second">
								<MainPage />
							</Tab.Pane>
							<Tab.Pane eventKey="legacy">
								<LegacyPage />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		);
	}
}

class HomePage extends React.Component {

	render() {
		const { user } = this.props;
		return !user || user.expired ? <div className="loginpage" ><LoginPage /></div> : <div className="navpage" ><Navigation /></div>;
	}
}

function mapStateToProps(state) {
	return {
		user: state.oidc.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
