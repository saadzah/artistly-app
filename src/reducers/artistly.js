const initialState = {
    search: '',
    results: []
};

const artistlyReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
        case 'SEARCH_CHANGE':
            return { search: action.payload,  ...state };
        default:
            return state;
    }
};

export default artistlyReducer;