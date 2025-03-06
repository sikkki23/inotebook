import React from "react";
import Navbar from './components/Navbar.js';
import  Home  from './components/Home';
import About from './components/About.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState.js";
import Alert from "./components/Alert.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";

const App = () => {


    return (
      <>
      <NoteState>
       <BrowserRouter>
        <Navbar></Navbar>
        <Alert message="This is Amazing alert"/>
        <div className="container">
        <Routes>
              <Route exact path="/"              element={<Home  />}> </Route> 
              <Route exact path="/home"          element={<Home />}> </Route>
              <Route exact path="/about"         element={<About />}> </Route>
              <Route exact path="/login"         element={<Login />}> </Route>
              <Route exact path="/signup"        element={<Signup />}> </Route>
              </Routes>
        </div>
        </BrowserRouter>
        </NoteState>
      </>
    )
  
}

export default App
