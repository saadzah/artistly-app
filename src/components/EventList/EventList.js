import React from 'react';
import PropTypes from 'prop-types';
import EventCard from '../EventCard/EventCard';
import Grid from '@material-ui/core/Grid';


const ArtistList = ({ events }) => {

    return (
        <>
            <Grid container spacing={5}>
                {events.map((event) => (
                    <Grid key={event?.id} item xs={12} md={4} xl={4}>
                        <EventCard event={event} />
                    </Grid>
                ))}

            </Grid>
        </>
    )
}

ArtistList.defaultProps = {
    events: []
}

ArtistList.propTypes = {
    events: PropTypes.any
}

export default ArtistList
