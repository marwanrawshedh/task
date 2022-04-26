import React from 'react';
import  './card.css';
// import'./hi.css'

function Card(props) {
  const color=props.color==="mand"?"#02C39A":props.color==="add"?"#0094FF":"#FF8364"
    return (
        <div style={{borderColor: color}} className={`${props.type}`}>
          {props.children}
        </div>
    );
}

export default Card;
