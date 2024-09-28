/*-------------------------------------------------------------------------------\
| Title: MainRouter.jsx                                                          |
+--------------------------------------------------------------------------------+
| Student Name: Yu-Hsuan Chen                                                    |
| Student ID: 301448975                                                          |
| Date: 2024-09-28                                                               |
+--------------------------------------------------------------------------------+
| CODE DESCRIPTION                                                               |
| This file is used to manager routes(paths).                                    |
\-------------------------------------------------------------------------------*/
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Project from './components/Project'
import Layout from './components/Layout'

const MainRouter = () => {
        return (
        <div>
                        <Layout/>
                        <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route exact path="/about" element={<About />} />
                                <Route exact path="/service" element={<Service />} />
                                <Route exact path="/project" element={<Project />} />
                                <Route exact path="/contact" element={<Contact />} />
                                <Route exact path="/layout" element={<Layout />} />
                        </Routes>
                </div>
        )
}

export default MainRouter