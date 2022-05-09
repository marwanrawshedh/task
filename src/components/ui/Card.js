import React from 'react';
import  './card.css';

function Card(props) {
  const color=(type)=>{
    
    const obj={
      Mandatory:"#02C39A",
      Optional:"#FF8364",
      Additional:"#0094FF"

    }

    return obj[type?.split(" ")[0]]
  }
  
  
    return (
        <div style={{borderColor: color(props.color)}} className={`${props.type}`}>
          {props.children}
        </div>
    );
}

export default Card;
