import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCurrentUser(action) {
    console.log('payload of getcurrentsuer', payload);
    
    const payload = action.payload

    try {
        console.log(payload);
        
        console.log('GET current user for tattoo', payload);
        const getResponse = yield axios.get(`/api/tattoo/user/${payload}`);
        console.log('getResponse:', getResponse);
        
        const action = {type: 'SET_CURRENT_USER', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the current user`);
        alert(`Sorry couldn't get the current user. Try again later.`)
    }
  }

function* currentUserSaga() {
    yield takeLatest('GET_CURRENT_USER', getCurrentUser);
}

export default currentUserSaga;
