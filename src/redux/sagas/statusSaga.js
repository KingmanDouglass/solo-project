import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getStatus(action) {
    try{
        console.log('GET status for tattoo', action);
        const getResponse = yield axios.get('/api/tattoo/status');
        const action = {type: 'SET_STATUS', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the status`);
        alert(`Sorry couldn't get the status. Try again later.`)
    }
}

function* statusSaga() {
    yield takeLatest('GET_STATUS', getStatus);
}

export default statusSaga;
