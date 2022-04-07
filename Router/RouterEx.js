// npm install react-router

import React from 'react';
import {BrowserRouter as Router ,Link , Route} from 'react-router-dom';

export default function RouterEx()
{
    return(
        <>
        <div>
            <Router>
                    <Link to='home'>Home</Link> <br/><br/>
                    <Link to='about'>About</Link> <br/><br/>
                    <Link to='contact'>Contact</Link>

                    {/* <Route path="./home"> <Home /> </Route> */}
                    {/* <Route path='./about'> <About /> </Route>
                    <Route path='./contact'> <Contact /> </Route> */}
            </Router>
        </div>
        </>
    )
}


function Home()
{
    return(
        <>
        Home Component
        </>
    )
}

function About()
{
    return(
        <>
        About Component
        </>
    )
}

function Contact()
{
    return(
        <>
        Contact Component
        </>
    )
}


