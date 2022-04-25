import React ,{useContext}from 'react';
import MandatoryCard from './ui/MandatoryCard';
import Card from './ui/Card'
import classes from './cardsWrapper.module.css'
import { dataContext } from '../context/Context'

function MandatoryCourses(props) {

    const ctx = useContext(dataContext)
     console.log(ctx);
    return (
        <section className={classes.mandWrapper}>
            {ctx.mand.map((element,index) => {
                return (

                <Card color={ctx.status.mand.color} key={index} type="mand">
                    <MandatoryCard element={element}/>
                </Card>)

            })}


        </section>
    );
}

export default MandatoryCourses;