import React from 'react'
import Container from '@material-ui/core/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { searchChange, getArtists } from '../../actions';
import { useHistory } from "react-router-dom";

const Home = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const searchTerm = useSelector(state => state.search);

    const onSearchChange = (value) => {
        dispatch(searchChange(value));
        dispatch(getArtists(value));
        history.push('/results');
    };

    return (
        <Container>
            <SearchBar text={searchTerm} placeHolderText="Search Artists" onSubmit={onSearchChange}></SearchBar>
        </Container>
    )
}

export default Home
