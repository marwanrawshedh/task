import React from 'react';
import classes from './cardData.module.css'
function MandatoryCard(props) {
    return (
        <div className={classes.data}>
            <div className={classes.upperSec}>
                <div className={classes.title}>

                    <img src={require(`../../img/${props.element.img}.png`)} />
                    <div >
                    <h1>{props.element.name}</h1>
                    <h3>{props.element.code.toUpperCase()
}</h3>
                    </div>
                </div>
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