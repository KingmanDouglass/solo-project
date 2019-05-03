import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteEntry(action) {
    console.log('payload of getcurrentsuer', payload);
    
    const payload = action.payload

    try {
        console.log(payload);
        
        console.log('DELETE current user from pipeline', payload);
        yield axios.delete(`/api/tattoo/otherexample/${payload}`);
        

        console.log('DELETE current user from pipeline', payload);
        yield axios.delete(`/api/tattoo/example/${payload}`);
        
        
        const action = {type: 'GET_TATTOOS'};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't DELETE the current user`);
        alert(`Sorry couldn't delete the current user. Try again later.`)
    }
  }

function* deleteSaga() {
    yield takeLatest('DELETE_TATTOO', deleteEntry);
}

export default deleteSaga;
