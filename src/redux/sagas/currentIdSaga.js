import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCurrentId(action) {
    // console.log('payload', action.payload);
    const payload = action.payload;

    try {
        console.log(payload);
        
        console.log('GET current id for tattoo', payload);
        const getResponse = yield axios.get(`/api/tattoo/id/${payload}`);
        console.log('getResponse:', getResponse);
        
        const action = {type: 'SET_CURRENT_ID', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the current ID`);
        alert(`Sorry couldn't get the current ID. Try again later.`)
    }
  }

function* currentIdSaga() {
    yield takeLatest('GET_CURRENT_ID', getCurrentId);
}

export default currentIdSaga;
