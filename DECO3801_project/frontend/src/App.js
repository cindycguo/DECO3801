import React, { Component } from "react"
import {render} from "react-dom"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Notes from "./components/Notes";
import Sessions from "./components/Sessions";
import Navbar from "./components/Navbar";
import Employee from "./components/Employee";
import NewSession from "./components/Newsession";
import PostSessions from "./components/PostSessions";
import ShowSessions from './components/ShowSessions';
import AddSession from './components/AddSession';
import UpdateSession from './components/UpdateSession';
import SessionDetail from './components/SessionDetails';
import ShowEmployees from './components/ShowEmployees';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeeDetail from './components/EmployeeDetails';

function App(props) {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/employee' element={<Employee/>}/>
                <Route path='/employee/:emp_no/update' element={<UpdateEmployee/>}/>
                <Route path='/employee/:emp_no/' element={<EmployeeDetail/>}/>
                <Route path='/notes' element={<Notes/>} />
                <Route path='/sessions' element={<Sessions/>} />
                <Route path='/newsessions' element={<NewSession/>} />
                <Route exact path='/postsessions' element={<PostSessions/>} />
                <Route exact path="/postsessions/:id/update" element={<UpdateSession/>} />
                <Route exact path="/postsessions/:id/" element={<SessionDetail/>} />
            </Routes>

        </Router>
    );
  }

  export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);