import React from 'react';
import classes from './cardData.module.css'
function AdditionalCard(props) {
    return (
        <>
            <div className={classes.data}>

                <div className={classes.title}>
                    <img src={require(`../../img/${props.element.img}.png`)} />
                    <h1 className={classes.text}>{props.element.name}</h1>
                </div>
                <h6>Course type</h6>
                <div className={classes.lowerSec}>


                <p>{props.element.des}</p>
                    <h4>{props.element.hours}</h4>
                    

                </div>

            </div>
        </>
    );
}

export default AdditionalCard;