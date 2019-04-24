const deleteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DELETE':
            return action.payload;
        default:
            return state;
    }
  }

  export default deleteReducer;