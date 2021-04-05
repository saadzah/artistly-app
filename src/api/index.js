import axios from 'axios';

export function requestArtists(action) {
    return axios.get('https://cors.bridged.cc/https://www.bandsintown.com/searchSuggestions?searchTerm=' + action.payload + '&cameFromCode=267');
}

export function requestArtistData(action) {
    return axios.get('https://rest.bandsintown.com/artists/'+ action +'?app_id=test');
}