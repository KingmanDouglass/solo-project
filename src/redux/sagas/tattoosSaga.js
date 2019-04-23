import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getTattoos(action) {
    try{
        console.log('GET styles for tattoo', action);
        const getResponse = yield axios.get('/api/tattoo/');
        const action = {type: 'SET_TATTOOS', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the tattoos`);
        alert(`Sorry couldn't get the tattoos. Try again later.`)
    }
}

function* tattoosSaga() {
    yield takeLatest('GET_TATTOOS', getTattoos);
}

export default tattoosSaga;
