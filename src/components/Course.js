import React, { useContext } from "react";
import Card from "./ui/Card";
import { dataContext } from "../context/Context";
import classes from "./cardsWrapper.module.css";
import courseCss from "./course.module.css";

function Course(props) {
  const { course } = useContext(dataContext);
  console.log("wow2");
  return (
    <div className={classes.courseWrapper}>
      <Card color="#33358B" type="course">
        <div className={courseCss.title}>
          <img src={require(`../img/${course.img}.png`)} />
          <h1>{course.name}</h1>
        </div>
        <div className={courseCss.text}>
          <h6>Total Training Duration:</h6>
          <h4>
            {course.hours} ({course.duration})
          </h4>
        </div>
      </Card>
    </div>
  );
}

export default Course;
