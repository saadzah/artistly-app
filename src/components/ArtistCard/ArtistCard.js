import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const ArtistCard = ({artist}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={artist?.image_url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {artist?.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Facebook
                </Button>
                <Button size="small" color="primary">
                    View Events
                </Button>
            </CardActions>
        </Card>
    );
}

ArtistCard.defaultProps = {
    artist: {}
}

ArtistCard.propTypes = {
    artists: PropTypes.object
}

export default ArtistCard
