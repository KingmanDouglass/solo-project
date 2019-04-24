import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postEntry(action) {
    // console.log('payload of post tattoo', payload);
    
    // const payload = action.payload
    try {
        console.log('POST current user from pipeline', action);
        yield axios.post(`/api/tattoo/`, action.payload);
        yield put({ type: 'GET_TATTOOS' });
    }catch (error) {
        console.log(`Couldn't POST the current user`);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

function* postSaga() {
    yield takeLatest('ADD_TATTOO', postEntry);
}

export default postSaga;
