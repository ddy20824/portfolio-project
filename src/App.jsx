/*-------------------------------------------------------------------------------\
| Title: App.jsx                                                                 |
+--------------------------------------------------------------------------------+
| Student Name: Yu-Hsuan Chen                                                    |
| Student ID: 301448975                                                          |
| Date: 2024-09-28                                                               |
+--------------------------------------------------------------------------------+
| CODE DESCRIPTION                                                               |
| This file is used to include router.                                           |
\-------------------------------------------------------------------------------*/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';

const App = () => {
  return (
    <Router>
        <MainRouter />
    </Router>
  );
};

export default App;
