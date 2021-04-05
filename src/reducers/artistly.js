const initialState = {
    search: '',
    artists: [],
    selectedArtist: {},
    events: []
};

const artistlyReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
        case 'SEARCH_CHANGE':
            return { ...state, search: action.payload };
        case 'SET_ARTISTS':
            return { ...state, artists: action.payload.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i) };
        case 'SELECT_ARTIST':
            return { ...state, selectedArtist: action.payload };
        case 'SET_EVENTS':
            return { ...state, events: action.payload};
        default:
            return state;
    }
};

export default artistlyReducer;