const tattoosReducer = (state = [], action) => {
        switch (action.type) {
            case 'SET_TATTOOS':
                return action.payload;
            default:
                return state;
        }
    }

  export default tattoosReducer;