import React, { useState } from "react";
import Navbar from './components/Navbar.js';
import  Home  from './components/Home';
import About from './components/About.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState.js";
import Alert from "./components/Alert.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";


const App = () => {

  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


    return (
      <>
      <NoteState>
       <BrowserRouter>
        <Navbar></Navbar>
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
              <Route exact path="/"              element={<Home  showAlert={showAlert}/>}> </Route> 
              <Route exact path="/home"          element={<Home showAlert={showAlert}/>}> </Route>
              <Route exact path="/about"         element={<About />}> </Route>
              <Route exact path="/login"         element={<Login showAlert={showAlert}/>}> </Route>
              <Route exact path="/signup"        element={<Signup showAlert={showAlert}/>}> </Route>
              </Routes>
        </div>
        </BrowserRouter>
        </NoteState>
      </>
    )
  
}

export default App
