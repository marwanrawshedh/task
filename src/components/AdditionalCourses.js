import React, { useContext } from 'react';
import AdditionalCard from './ui/AdditionalCard';
import Line from './ui/Line';
import Card from './ui/Card';
import { dataContext } from '../context/Context'
import classes from './cardsWrapper.module.css'


function AdditionalCourses(props) {

    const ctx = useContext(dataContext)

    return (<>
    <div className='line'>
        
    <Line/>
        <p className='addText'>Additional Courses</p>
        <Line/>
    </div>
        
        <section className={classes.additionalWrapper}>
            {ctx.add.map((element, index) => {
                return (
                <Card key={index} color={ctx.status.add.color}  type="add">
                    <AdditionalCard element={element} />
                </Card>
                )
            })}

        </section>
    </>
    );
}

export default AdditionalCourses;