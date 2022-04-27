import React from 'react';
import { createContext } from 'react';

export const dataContext = createContext({});

function Context(props) {

    
    const arr = {
        course: { name: "NodeJs", duration: "24 Days", hours: "163 Hours", img: "node" },
        mand: [
            
            { name: "JavaScript", code: "JS 101", des: "The Modern Javascript Bootcamp", duration: "8 Day", hours: "50 Hours", img: "js" },
        { name: "SQL", code: "sql 101", des: "Learning SQL", duration: "1 Day", hours: "8 Hours", img: "sql" },
        { name: "Node", des: "The complete Node.js Developer Course (3rd Edition)", duration: "10 Day", code: "JS 201", hours: "64 Hours", img: "node" },
        { name: "graphQl", des: "Practical GraphQL: Become a GraphQL Ninja", duration: "6 Day", code: "JS 301", hours: "40 Hours", img: "graphQl" }
        ],
        add: [
            { name: "JIRA", des: "Online Session", hours: "4 Hours", img: "jira" },
            { name: "git", des: "Online Session", hours: "4 Hours", img: "git" },
            { name: "Agile", des: "Online Session", hours: "4 Hours", img: "agile" } 
        ],

        status: {
             mand: {type:"mand" ,text: "Mandatory" }, 
             optional: {type:"optional", text: "Optional" } ,
             add: {type:"add", text: "Additional courses" }
            }
    }
    return (
        <dataContext.Provider value={arr} >
            {props.children}
        </dataContext.Provider>
    );
}

export default Context;