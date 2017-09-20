import { take, put, select, call, fork } from 'redux-saga/effects';
import { LOAD_USERDATA_START } from './constants';
import { LOAD_LEGACYDATA_START, CLEAN_LEGACYDATA_START } from './constants';
import { loadUserDataSuccess } from './actions';
import { loadLegacyDataSuccess } from './actions';
import userDataRequest from './utils/userDataRequest';
import legacyDataRequest from './utils/legacyDataRequest';
import configuration from 'configuration';

export function* loadUserDataSaga() {
  while (true) {
    yield take(LOAD_USERDATA_START);

    const url = configuration.userDataUrl;
    const result = yield call(userDataRequest, url);
    const payloadFromExternalService = []
    
    console.log("result: ", result);

    for (var i=0;i<result.length;i++) {
      payloadFromExternalService.push({
        id: result[i].id,
        title: result[i].title,
        description: result[i].description,
        thumbnail: result[i].thumbnail
      });
    }

    yield put(loadUserDataSuccess(payloadFromExternalService));
  }
}

export function* loadLegacyDataSaga() {
	  while (true) {
	    yield take(LOAD_LEGACYDATA_START);

			const url = configuration.legacyDataUrl;
	    const result = yield call(legacyDataRequest, url);
	    const legacyitems = []
	    
	    console.log("result: ", result);

	    for (var i=0;i<result.length;i++) {
	      legacyitems.push({
	        id: result[i].id,
	        title: result[i].title,
	        description: result[i].description,
	        thumbnail: result[i].thumbnail
	      });
	    }

	    yield put(loadLegacyDataSuccess(legacyitems));
	  }
	}

export function* cleanLegacyDataSaga() {
	  while (true) {
	    yield take(CLEAN_LEGACYDATA_START);
	    yield put(loadLegacyDataSuccess([]));
	  }
	}

export function* rootSaga() {
    yield [
        fork(loadUserDataSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(loadLegacyDataSaga),
        fork(cleanLegacyDataSaga)
    ];
}
