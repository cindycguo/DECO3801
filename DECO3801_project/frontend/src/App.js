import React, { Component } from "react"
import {render} from "react-dom"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Notes from "./components/Notes";
import Sessions from "./components/Sessions";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App(props) {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/notes' element={<Notes/>} />
                <Route path='/sessions' element={<Sessions/>} />
            </Routes>

        </Router>
    );
  }

  export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);