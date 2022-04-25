import React from 'react';
import AdditionalCard from './ui/AdditionalCard';
import Card from './ui/Card';
import classes from './ui/card.module.css'

const arr = [{ name: "js", des: "js course", duration: "1day", hours: "40hours" }, { name: "sql", des: "js course", duration: "3day", hours: "18hours" }, { name: "css", des: "css course", duration: "5day", hours: "48hours" }]
function AdditionalCourses(props) {
    return (
        <section className={classes.additionalWrapper}>
            {arr.map((element) => {
                return (<Card type="add"><AdditionalCard element={element} /></Card>)
            })}

        </section>
    );
}

export default AdditionalCourses;