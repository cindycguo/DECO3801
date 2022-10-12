import React, { Component } from "react"
import {render} from "react-dom"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Notes from "./components/Notes";
import Sessions from "./components/Sessions";
import Navbar from "./components/Navbar";
import Employee from "./components/Employee";
import NewSession from "./components/Newsession";

function App(props) {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/employee' element={<Employee/>}/>
                <Route path='/notes' element={<Notes/>} />
                <Route path='/sessions' element={<Sessions/>} />
                <Route path='/newsessions' element={<NewSession/>} />
            </Routes>

        </Router>
    );
  }

  export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);