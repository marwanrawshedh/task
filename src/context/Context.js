import React from 'react';
import { createContext } from 'react';

export const dataContext = createContext({});

function Context(props) {
    const arr = {
        course: { name: "NodeJs", duration: "24", hours: "163", img: "" },
        mand: [
            { name: "JavaScript", code: "js 101", des: "The Modern Javascript Bootcamp", duration: "1day", hours: "40hours", img: "js" },
        { name: "sql", code: "js 201", des: "Learning SQL", duration: "3day", hours: "18hours", img: "sql" },
        { name: "node", des: "The complete Node.js Developer Course (3rd Edition)", duration: "5day", code: "js 301", hours: "48 Hours", img: "node" }
        ],
        add: [
            { name: "jira", des: "Online Session", hours: "15hours", img: "jira" },
            { name: "agile", des: "Online Session", hours: "25hours", img: "agile" }, 
            { name: "git", des: "Online Session", hours: "48hours", img: "git" }],

        status: {
             mand: {type:"mand" ,text: "Mandatory", color: "#02C39A" }, 
             add: {type:"add", text: "Additional courses", color: "#0094FF" }, 
             optional: {type:"optional", text: "Optional", color: "#FF8364" } 
            }
    }

    return (
        <dataContext.Provider value={arr} >
            {props.children}
        </dataContext.Provider>
    );
}

export default Context;