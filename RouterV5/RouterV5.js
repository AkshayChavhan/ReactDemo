// npm install react-router-dom@v5
import React from 'react'
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Switch, Route ,Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Apple from './Apple';



export default function RouterV5() {
  return (
    <div>
      <h1>RouterV5</h1>
      <Router>
        <Switch>
{/* 
        <Link to='home'>Home</Link> <br/><br/>
        <Link to='about'>About</Link> <br/><br/>
        <Link to='contact'>Apple</Link> <br/><br/>
        <Link to='about'>Contact</Link> <br/><br/> */}

          <Route path='/home'>
             <Home />
          </Route>
          <Route path='/about'>
             <About />
          </Route>
          <Route path='/apple'>
             <Apple />
          </Route>
          <Route path='/contactus'>
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
