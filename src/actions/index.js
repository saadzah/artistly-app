export const searchChange = (value) => {
    return {
        type: 'SEARCH_CHANGE',
        payload: value
    };
};

export const setArtists = (value) => {
    return {
        type: 'SET_ARTISTS',
        payload: value
    };
};

export const selectArtist = (value) => {
    return {
        type: 'SELECT_ARTIST',
        payload: value
    };
};

export const setEvents = (value) => {
    return {
        type: 'SET_EVENTS',
        payload: value
    };
};