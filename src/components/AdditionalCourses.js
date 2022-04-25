import React, { useContext } from 'react';
import AdditionalCard from './ui/AdditionalCard';
import Card from './ui/Card';
import classes from './cardsWrapper.module.css'
import { dataContext } from '../context/Context'


function AdditionalCourses(props) {

    const ctx = useContext(dataContext)

    return (<>
        <p>Additional Courses</p>
        <section className={classes.additionalWrapper}>
            {ctx.add.map((element, index) => {
                return (
                <Card key={index} color={ctx.status.add.color}  type="add">
                    <AdditionalCard element={element} />
                </Card>)
            })}

        </section>
    </>
    );
}

export default AdditionalCourses;