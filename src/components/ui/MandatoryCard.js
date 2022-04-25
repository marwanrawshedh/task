import React from 'react';
import classes from './cardData.module.css'
function MandatoryCard(props) {
    return (
        <div className={classes.data}>
            <div className={classes.upperSec}>

            <h1>{props.element.name}</h1>
            <div className={classes.duration}>
            <h4>{props.element.hours}</h4>
            <h5>({props.element.duration})</h5>
            </div>
            </div>
            <h6>Full course name</h6>
            <p>{props.element.des}</p>
            
        </div>
    );
}

export default MandatoryCard;