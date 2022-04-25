import React from "react";
import MandatoryCourses from "./components/MandatoryCourses";
import AdditionalCourses from "./components/AdditionalCourses";
import Header from './components/Header'
import Info  from './components/Info'
import './app.css'
function App() {
  return (
    <>
    {/* <Header/> */}
     <MandatoryCourses/>
     <AdditionalCourses/>
     {/* <Info/> */}
    </>
  );
}

export default App;
