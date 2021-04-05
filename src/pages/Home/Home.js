import React from 'react'
import Container from '@material-ui/core/Container';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    return (
        <Container>
            <SearchBar placeHolderText="Search Artists"></SearchBar>
        </Container>
    )
}

export default Home
