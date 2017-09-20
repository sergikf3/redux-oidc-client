import { LOAD_USERDATA_START, LOAD_USERDATA_SUCCESS } from './constants';
import { LOAD_LEGACYDATA_START, CLEAN_LEGACYDATA_START, LOAD_LEGACYDATA_SUCCESS } from './constants';

export function loadUserDataStart() {
	  return {
	    type: LOAD_USERDATA_START
	  };
	}

export function loadUserDataSuccess(useritems) {
	  return {
	    type: LOAD_USERDATA_SUCCESS,
	    payload: useritems
	  };
	}

export function loadLegacyDataStart() {
		  return {
		    type: LOAD_LEGACYDATA_START
		  };
	}

export function loadLegacyDataSuccess(legacyitems) {
		  return {
		    type: LOAD_LEGACYDATA_SUCCESS,
		    payload: legacyitems
		  };
	}

export function cleanLegacyDataStart() {
	  return {
	    type: CLEAN_LEGACYDATA_START
	  };
}

