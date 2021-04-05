import React from 'react'
import Container from '@material-ui/core/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { searchChange } from '../../actions';

const Home = () => {

    const dispatch = useDispatch();

    const searchTerm = useSelector(state => state.search);

    const onSearchChange = (value) => { 
        dispatch(searchChange(value));
    };

    return (
        <Container>
            <SearchBar text={searchTerm} placeHolderText="Search Artists" onSubmit={onSearchChange}></SearchBar>
        </Container>
    )
}

export default Home
