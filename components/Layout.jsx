/*-------------------------------------------------------------------------------\
| Title: Layout.jsx                                                              |
+--------------------------------------------------------------------------------+
| Student Name: Yu-Hsuan Chen                                                    |
| Student ID: 301448975                                                          |
| Date: 2024-09-28                                                               |
+--------------------------------------------------------------------------------+
| CODE DESCRIPTION                                                               |
| This file is used to generate the Navigation Bar.                              |
\-------------------------------------------------------------------------------*/
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';

export default function Layout() {
  return (
    <>
      <header>
        {/* Logo and click to Home page */}
        <Link to="/" className="logo">
          <img src={logo} alt=""></img>
        </Link>
        {/* navigation bar */}
        <nav>
          <div className="top-nav">
            <ul>
              <li><Link to="/" className='text-size-20'>Home</Link></li>
              <li><Link to="/about" className='text-size-20'>About</Link></li>
              <li><Link to="/project" className='text-size-20'>Projects</Link></li>
              <li><Link to="/service" className='text-size-20'>Services</Link></li>
              <li><Link to="/contact" className='text-size-20'>Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

