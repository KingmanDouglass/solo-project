import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getBodyParts(action) {
    try{
        console.log('GET areas for tattoo', action);
        const getResponse = yield axios.get('/api/tattoo/areas');
        const action = {type: 'SET_BODY_PARTS', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the areas`);
        alert(`Sorry couldn't get the areas. Try again later.`)
    }
  }

function* stylesSaga() {
    yield takeEvery('GET_BODY_PARTS', getBodyParts);
}

export default stylesSaga;
