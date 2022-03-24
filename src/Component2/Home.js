import React from 'react';
import ContactUs from './ContactUs';
import {
    BrowserRouter as Router,
    BrowserRouter,
    Route,
    Link
  } from "react-router-dom";

export default function Home() {

    return (
        <>
            <Router>
                <div>
                    <ul>
                        <li>
                            <h1>Home<Link to="/">Home</Link></h1>
                        </li>
                        <li>
                            <h2>Contact<Link to="/ContactUs">Contact</Link></h2>
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
        </>
    )
}