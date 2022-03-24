import React from 'react';
import ContactUs from './ContactUs';
import {
    BrowserRouter as Router,
    BrowserRouter,
    Route,
    Link
  } from "react-router-dom";
  import Home from './Home';
export default function App1(){

    return(
        <Router>
        <div>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/ContactUs">Contact</Link>
                </li>

            </ul>
        </div>
        <BrowserRouter>
            <Route path="/Home">
                <Home />
            </Route>
            <Route path="/ContactUs">
                <ContactUs />
            </Route>
        </BrowserRouter>


    </ Router>
    )
}