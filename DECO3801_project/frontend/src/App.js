import React, { Component } from "react"
import {render} from "react-dom"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Notes from "./components/Notes";
import Sessions from "./components/Sessions";
import Navbar from "./components/Navbar";

import Login, Logout from "./components/login";

function App(props) {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/notes' element={<Notes/>} />
                <Route path='/sessions' element={<Sessions/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/logout' element={<Logout/>} />
            </Routes>

        </Router>
    );
  }

  export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);