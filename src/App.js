import React from "react";
import MandatoryCourses from "./components/MandatoryCourses";
import AdditionalCourses from "./components/AdditionalCourses";
import Header from './components/Header'
import Info  from './components/Info'
import Context from "./context/Context";
import './app.css'

function App() {
  
  return (
    <>

    <Header/>
    <Context>
     <MandatoryCourses/>
     <AdditionalCourses/>
     <Info/>
     </Context>

    </>
  );
}

export default App;
