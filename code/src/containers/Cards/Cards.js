import React from 'react';

import Card from '../../components/Card/Card';

import classes from './Cards.css';

const cards = (props) => {
    let noCard = true;
    console.log(props.data);
    return (
        <div className={classes.Cards}>
            {props.data.map(card => {
                let hidden = true;
                if(props.hiddenOrNot.indexOf(card.id) !== -1) {
                    hidden = false;
                } else {
                    if(props.hiddenOrNot.length === 0 && props.searchTerm === '') {
                        hidden = false;
                    }
                }
                if(hidden === false) {
                    noCard = false;
                    return <Card key={card.id} content={card} />
                } else {
                    return null;
                }
            })}
            {
                noCard === true ? <p className={classes.noCardFound}>Please recheck your search term</p> : null
            }
        </div>

    );
}

export default cards;