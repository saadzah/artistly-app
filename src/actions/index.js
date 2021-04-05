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

export const getArtists = (value) => {
    return {
        type: 'GET_ARTISTS',
        payload: value
    };
};