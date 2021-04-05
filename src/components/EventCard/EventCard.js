import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import './EventCard.css';
import DayJS from 'react-dayjs';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
});

const EventCard = ({ event }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Event Details
                </Typography>
                <Divider />
                <div className="row">
                    <div className="colum">
                        <div className="column">
                            <Typography variant="h6" component="p">
                                Country
                        </Typography>
                            <Typography variant="body1" component="p">
                                {event?.venue?.country ? event?.venue?.country : 'N/A'}
                            </Typography>
                        </div>
                        <div className="column">
                            <Typography variant="h6" component="p">
                                City
                        </Typography>
                            <Typography variant="body1" component="p">
                                {event?.venue?.city ? event?.venue?.city : 'N/A'}
                            </Typography>
                        </div>
                    </div>
                    <div className="column" style={{marginLeft: '10px'}}>
                        <div className="column">
                            <Typography variant="h6" component="p">
                                Venue
                        </Typography>
                            <Typography variant="body1" component="p">
                                {event?.venue?.location ? event?.venue?.location : 'N/A'}
                            </Typography>
                        </div>
                        <div className="column">
                            <Typography variant="h6" component="p">
                                Date
                        </Typography>
                            <Typography variant="body1" component="p">
                                <DayJS format="MM-DD-YYYY">{event?.datetime ? event?.datetime : 'N/A'}</DayJS>
                            </Typography>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

EventCard.defaultProps = {
    event: {}
}

EventCard.propTypes = {
    event: PropTypes.object
}

export default EventCard
