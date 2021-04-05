import React from 'react'
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { searchChange, getArtists } from '../../actions';
import ArtistList from '../../components/ArtistList/ArtistList';
import './Results.css';

const Results = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector(state => state.search);
    const artists = useSelector(state => state.artists);

    const onSearchChange = (value) => {
        dispatch(searchChange(value));
        dispatch(getArtists(value));
    };

    return (
        <Container>
            <SearchBar text={searchTerm} placeHolderText="Search Artists" onSubmit={onSearchChange}></SearchBar>
            <div className="artist-list-container">
                <h2>{artists?.length > 0 ? artists?.length + ` Results found for "${searchTerm}"` : 'No items found'}</h2>
                <Divider />
                <div className="artist-list">
                    <ArtistList artists={artists}></ArtistList>
                </div>
            </div>
        </Container>
    )
}

export default Results
