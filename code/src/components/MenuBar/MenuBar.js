import React from 'react';
import classes from './MenuBar.css';
import githubIcon from '../../assets/git-icon.png';

const menuBar = () => (
    <nav className={classes.MenuBar}>
        <p>The React Cheat Sheet <a href="https://github.com/entrepaman/react-cheat-sheet"><img src={githubIcon} alt="Github Link"/></a></p>
    </nav>
);

export default menuBar;