import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import EventList from '../../components/EventList/EventList';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Events.css';
import { Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

const Events = () => {

    const selectedArtist = useSelector(state => state.selectedArtist);
    const events = useSelector(state => state.events);
    const loading = useSelector(state => state.loading);

    return (
        <Container>
            <Link to="results" style={{ textDecorationLine: 'none' }}><h2 className="link-text"><ArrowBackIosIcon></ArrowBackIosIcon> Back to results</h2></Link>
            <ArtistCard artist={selectedArtist} showActions={false}></ArtistCard>
            <h2>{events?.length > 0 ? events?.length + ` upcoming events"` : 'No events found.'}</h2>
            <Divider />
            <div className="artist-list">
                {loading ? <LinearProgress color="secondary" /> : ''}
                <EventList events={events}></EventList>
            </div>
        </Container>
    )
}

export default Events
