import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { searchChange } from '../../actions';
import ArtistList from '../../components/ArtistList/ArtistList';
import './Results.css';
import LinearProgress from '@material-ui/core/LinearProgress';

const Results = () => {

    const dispatch = useDispatch();

    const searchTerm = useSelector(state => state.search);
    const artists = useSelector(state => state.artists);
    const loading = useSelector(state => state.loading);

    const onSearchChange = (value) => {
        dispatch(searchChange(value));
    };

    return (
        <Container>
            <SearchBar text={searchTerm} placeHolderText="Search Artists" onSubmit={onSearchChange}></SearchBar>
            {loading ? <LinearProgress color="secondary" /> : ''}
            <div className="artist-list-container">
                <h2>{artists?.length > 0 ? artists?.length + ` Results found for "${searchTerm}"` : 'No artists found.'}</h2>
                <Divider />
                <div className="artist-list">
                    <ArtistList artists={artists}></ArtistList>
                </div>
            </div>
        </Container>
    )
}

export default Results
