import React from 'react'
import {Link} from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/apple'>Apple</Link></li>
        <li><Link to='/nopage'>No Page</Link></li>
    </ul>
    </>
  )
}
