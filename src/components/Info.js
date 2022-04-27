import React, { useContext } from 'react';
import Card from './ui/Card';
import classes from './cardsWrapper.module.css'
import { dataContext } from '../context/Context'


function Info(props) {
    const { status } = useContext(dataContext)
    const data = Object.values(status);
    
    return (
        <div className={classes.infoWrapper}>
            {data.map((element, index) => {
                
                return (

                    <Card key={index} color={element.type} type={"data"} >

                        <h1>{element.text}</h1>
                    </Card>

                )
            })}

        </div>
    );
}

export default Info;