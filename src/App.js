import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")
  const [switch1, setswitch1] = useState("Enable Darkmode")
  const [mystyle1, setMystyle1] = useState({
    backgroundColor: "#ffffff"
  })

  const toggletheme = () => {
    if (mode === "light") {
      setMode("dark")
      setswitch1("Disable Darkmode")
      document.body.style.backgroundColor = "#562ba3"
      setMystyle1({
        backgroundColor: "#562ba3",
        color: "white"
      })
      setAlert("Dark mode has been enabled ! ", "success")
      // document.title="Bhaii mazaa aaya"
      // setInterval(() => {
      //   document.title="Bhut mast hai bhaii"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install kr lo bhaii abhi"
      // }, 1500);
    }
    else {
      setMode("light")
      setswitch1("Enable Darkmode")
      document.body.style.backgroundColor = "#ffffff"
      setMystyle1({
        backgroundColor: "#ffffff",
        color: "black"
      })
      setAlert("Light mode has been enabled ! ", "success")
    }
  }
  const [myAlert, setMYalert] = useState(null)
  const setAlert = (message, type) => {
    setMYalert({
      msg: message,
      type1: type
    })
    setTimeout(() => {
      setMYalert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
        <Navbar Navbar="StarX" Home="Home" link="About" search="Query" mode={mode} toggletheme={toggletheme} switch1={switch1} />
        <Alert alert={myAlert} />
        {/* /* <Routes>  */}
                {/* <Route exact path='/' element={< Home />}></Route> 
                <Route exact path='/about' element={< About />}></Route> 
                <Route exact path='/' element={<Textform setAlert={setAlert} heading="Enter your heading what would like to write" mystyle1={mystyle1} />}></Route>  */}
        {/* </Routes> */}
            {/* <About/> */}
            <Textform setAlert={setAlert} heading="Enter your heading what would like to write" mystyle1={mystyle1} />
    </>
  );
}

export default App;
