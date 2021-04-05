import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from '../ArtistCard/ArtistCard';
import Grid from '@material-ui/core/Grid';


const ArtistList = ({ artists }) => {

    return (
        <>
            <Grid container spacing={5}>
                {artists.map((artist) => (
                    <Grid item xs={12} md={4} xl>
                        <ArtistCard key={artist?.name} artist={artist} />
                    </Grid>
                ))}

            </Grid>
        </>
    )
}

ArtistList.defaultProps = {
    artists: []
}

ArtistList.propTypes = {
    artists: PropTypes.any
}

export default ArtistList
