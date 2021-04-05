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
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectArtist } from '../../actions';

const useStyles = makeStyles({
    root: {
    },
    media: {
        height: 140,
    },
});

const ArtistCard = ({ artist, showActions }) => {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const viewEvents = () => {
        dispatch(selectArtist(artist));
        history.push('/events');
    };

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
            { showActions ? 
                <CardActions>
                    <Button size="small" color="primary" onClick={() => { window.open(artist?.facebook_page_url, '_blank') }}>
                        Facebook
                </Button>
                    <Button size="small" color="primary" onClick={viewEvents}>
                        View Events
                </Button>
                </CardActions>
                : ''
            }
        </Card>
    );
}

ArtistCard.defaultProps = {
    artist: {},
    showActions: true
}

ArtistCard.propTypes = {
    artists: PropTypes.object,
    showActions: PropTypes.bool
}

export default ArtistCard
