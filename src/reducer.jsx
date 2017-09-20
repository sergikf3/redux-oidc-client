import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';

import { LOAD_USERDATA_SUCCESS, LOAD_LEGACYDATA_SUCCESS } from './constants';
import { SESSION_TERMINATED, USER_EXPIRED } from 'redux-oidc';

const userdataInitialState = {
		  useritems: []
		};

const legacydataInitialState = {
		  legacyitems: []
		};

export function userdataReducer(state = userdataInitialState, action) {
	  switch (action.type) {
	    case SESSION_TERMINATED:
	    case USER_EXPIRED:
	      return Object.assign({}, {...state}, {useritems: []});
	    case LOAD_USERDATA_SUCCESS:
	      return Object.assign({}, {...state}, {useritems: action.payload});
	    default:
	      return state;
	  }
	}

export function legacydataReducer(state = legacydataInitialState, action) {
	  switch (action.type) {
	    case SESSION_TERMINATED:
	    case USER_EXPIRED:
	      return Object.assign({}, {...state}, {legacyitems: []});
	    case LOAD_LEGACYDATA_SUCCESS:
	      return Object.assign({}, {...state}, {legacyitems: action.payload});
	    default:
	      return state;
	  }
	}

const reducer = combineReducers(
  {
    routing: routerReducer,
    oidc: oidcReducer,
    userdata: userdataReducer,
    legacydata: legacydataReducer
  }
);

export default reducer;
