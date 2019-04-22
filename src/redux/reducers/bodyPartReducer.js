const bodyPartReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BODY_PARTS':
            return action.payload;
        default:
            return state;
    }
  }

  export default bodyPartReducer;