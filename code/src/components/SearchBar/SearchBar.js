import React from 'react';
import classes from './SearchBar.css';

const SearchBar = (props) => (
    <input type="text" placeholder={props.placeholder} className={classes.SearchBar} spellCheck="false" onChange={props.change}/>
);

export default SearchBar;