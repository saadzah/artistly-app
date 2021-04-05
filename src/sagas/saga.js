import { takeLatest, call, put } from 'redux-saga/effects';
import { requestArtistData, requestArtists, requestEventsData } from '../api';
import { setArtists, setEvents } from '../actions';

export function* handleArtists(action) {
    try {
        const response = yield call(requestArtists, action);
        const suggestedArtists = response.data.artists;
        const artists = [];
        for( let artist of suggestedArtists) {
            artist.name = artist.name.replaceAll('/', '%252F');
            artist.name = artist.name.replaceAll('?', '%253F');
            artist.name = artist.name.replaceAll('*', '%252A');
            artist.name = artist.name.replaceAll('"', '%27C');
            let res = yield call(requestArtistData, artist.name);
            artists.push(res.data);
        }
        yield put(setArtists(artists));
    } catch (err) {
        console.log(err);
    }
}

export function* handleEvents(action) {
    try {
        const response = yield call(requestEventsData, action);
        const events = response.data;
        yield put(setEvents(events));
    } catch (err) {
        console.log(err);
    }
}

export function* watcherSaga() {
    yield takeLatest('SEARCH_CHANGE', handleArtists);
    yield takeLatest('SELECT_ARTIST', handleEvents);
};