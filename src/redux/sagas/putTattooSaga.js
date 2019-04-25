import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editEntry(action) {
    console.log('PUT for editing tattoo', action.payload);
    try {
        yield axios.put(`/api/tattoo/edit/${action.payload.user_id}`, action.payload);
        yield put({ type: 'GET_TATTOOS' });
    }catch (error) {
        console.log(`Couldn't PUT the current user`);
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
  }

function* putTattooSaga() {
    yield takeLatest('PUT_TATTOO', editEntry);
}

export default putTattooSaga;
