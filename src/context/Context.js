import React from 'react';
import { createContext } from 'react';

export const dataContext = createContext({});

function Context(props) {
    const arr = {
        course: { name: "NodeJs", duration: "24 Days", hours: "163 Hours", img: "node" },
        mand: [
            { name: "JavaScript", code: "js 101", des: "The Modern Javascript Bootcamp", duration: "1 Day", hours: "40 Hours", img: "js" },
        { name: "sql", code: "sql 101", des: "Learning SQL", duration: "3 Day", hours: "18 Hours", img: "sql" },
        { name: "node", des: "The complete Node.js Developer Course (3rd Edition)", duration: "5 Day", code: "js 201", hours: "48 Hours", img: "node" },
        { name: "graphQl", des: "Practical GraphQL: Become a GraphQL Ninja", duration: "3 Day", code: "js 301", hours: "12 Hours", img: "graphQl" }
        ],
        add: [
            { name: "jira", des: "Online Session", hours: "15 Hours", img: "jira" },
            { name: "agile", des: "Online Session", hours: "25 Hours", img: "agile" }, 
            { name: "git", des: "Online Session", hours: "48 Hours", img: "git" }],

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