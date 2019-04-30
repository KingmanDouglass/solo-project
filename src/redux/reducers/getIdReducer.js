const getIdReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_ID':
            return action.payload;
        default:
            return state;
    }
  }

  export default getIdReducer;