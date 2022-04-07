//line number 13 to 17 not working
import React from 'react';
import { Route} from 'react-router-dom';
import Home from './Home2';
import About from './About2';
import Contact2 from './Contact2';
import Nav from './Nav';

export default function RouterEx()
{
    return(
        <>
        <div>
                    <Nav />
                    {/* <Route path='/about'> <About /> </Route>
                    <Route path="/" exact={true}> <Home /> </Route>
                    <Route path='/contact'> <Contact2 /> </Route> */}
        </div>
        </>
    )
}
