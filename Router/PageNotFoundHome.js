import React from 'react';
import {BrowserRouter as Router ,Link ,Route} from 'react-router-dom';


export default function PageNotFoundHome(){

    return(
        <div className='apple'>
            <Router>
                <Link to='/'>PageNotFoundHome</Link> 
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
     
                <Route path='/' exact> <PageNotFoundHome /> </Route>
                <Route path='/about'> <About /> </Route>
                <Route path='/contact' > <Contact /> </Route>
                <Route path='/*' > <PageNot /> </Route>
         

            </Router>
        </div>
    )
}

function About()
{
    return(
        <div>
            <h3>this is about page</h3>
        </div>
    )
}

function Contact()
{
    return(
        <div>
            <h3>this is Contact page</h3>
        </div>
    )
}

function PageNot()
{
    return(
        <div>
            <h3>this is pageNot found</h3>
        </div>
    )
}

