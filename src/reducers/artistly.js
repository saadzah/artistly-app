const initialState = {
    search: '',
    artists: []
};

const artistlyReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
        case 'SEARCH_CHANGE':
            return { ...state, search: action.payload };
        case 'SET_ARTISTS':
            return { ...state, artists: action.payload.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i) };
        default:
            return state;
    }
};

export default artistlyReducer;