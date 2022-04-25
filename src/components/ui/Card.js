import React from 'react';
import  './card.css';
// import'./hi.css'

function Card(props) {
  
    return (
        <div style={{borderColor: `${props.color}`}} className={`${props.type}`}>
          {props.children}
        </div>
    );
}

export default Card;
