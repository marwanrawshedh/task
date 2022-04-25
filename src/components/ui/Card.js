import React from 'react';
import classes from './card.module.css';
// import'./hi.css'

function Card(props) {
  
    return (
        <div className={props.type==="mand"?classes.mand:classes.add}>
          {props.children}
        </div>
    );
}

export default Card;