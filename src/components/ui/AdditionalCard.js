import React from 'react';
import classes from './cardData.module.css'
function AdditionalCard(props) {
    return (
        <>
              <div className={classes.data}>

            <h1>{props.element.name}</h1>

            <h6>Course type</h6>
            <div className={classes.lowerSec}>

            {/* <div className={classes.duration}> */}
            <h4>{props.element.hours}</h4>
            <h5>({props.element.duration})</h5>
            {/* </div> */}
            </div>
            <p>{props.element.des}</p>
            
        </div>
        </>
    );
}

export default AdditionalCard;