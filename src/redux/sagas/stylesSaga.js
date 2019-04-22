import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getStyles(action) {
    try{
        console.log('GET styles for tattoo', action);
        const getResponse = yield axios.get('/api/tattoo/styles');
        const action = {type: 'SET_STYLES', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the styles`);
        alert(`Sorry couldn't get the styles. Try again later.`)
    }
}

function* stylesSaga() {
    yield takeLatest('GET_STYLES', getStyles);
}

export default stylesSaga;
