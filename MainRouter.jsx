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
                                <Route path="/portfolio-project" element={<Home />} />
                                <Route path="/portfolio-project/about" element={<About />} />
                                <Route path="/portfolio-project/service" element={<Service />} />
                                <Route path="/portfolio-project/project" element={<Project />} />
                                <Route path="/portfolio-project/contact" element={<Contact />} />
                                <Route path="/portfolio-project/layout" element={<Layout />} />
                        </Routes>
                </div>
        )
}

export default MainRouter