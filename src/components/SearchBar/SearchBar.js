import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './SearchBar.css';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
    }),
);

const SearchBar = ({ text, placeHolderText, onSubmit }) => {
    const classes = useStyles();

    const [searchText, setSearchText] = useState(text);

    const handleTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchText);
    };

    return (
        <>
            <Paper component="form" className={classes.root} noValidate onSubmit={handleSubmit}>
                <InputBase
                    className={classes.input}
                    placeholder={placeHolderText}
                    defaultValue={searchText}
                    onChange={handleTextChange}
                    inputProps={{ 'aria-label': placeHolderText }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </>
    )
}

SearchBar.defaultProps = {
    placeHolderText: 'Search',
    text: '',
}

SearchBar.propTypes = {
    placeHolderText: PropTypes.string,
    text: PropTypes.string,
    onSubmit: PropTypes.func,
}

export default SearchBar