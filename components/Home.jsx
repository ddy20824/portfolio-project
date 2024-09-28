/*-------------------------------------------------------------------------------\
| Title: Home.jsx                                                                |
+--------------------------------------------------------------------------------+
| Student Name: Yu-Hsuan Chen                                                    |
| Student ID: 301448975                                                          |
| Date: 2024-09-28                                                               |
+--------------------------------------------------------------------------------+
| CODE DESCRIPTION                                                               |
| This file is used to generate the Home page.                                   |
\-------------------------------------------------------------------------------*/
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <>
            <div className="section">
                {/* Title and Mission Statement */}
                <div className="text-center">
                    <h1>Yu-Hsuan Chen's Portfolio</h1>
                    <i className="margin-bottom-0 text-size-25 ">To find happiness and fulfillment in everything I do at work.</i>
                </div>
                <br/>
                {/* Welcome message */}
                <h2 className="text-size-50 text-center"><span className="">-</span> Welcome to my page <span className="">-</span></h2>
                {/* Links and simple description */}
                <Link to="/portfolio-project/about">
                    <h3 className="text-size-30 margin-bottom-0 text-center">▸About</h3>
                </Link>
                <p className="text-size-20 margin-bottom-10 text-center">Who I am and my resume</p>
                <Link to="/portfolio-project/project">
                    <h3 className="text-size-30 margin-bottom-0 text-center">▸Projects</h3>
                </Link>
                <p className="text-size-20 margin-bottom-10 text-center">Some software projects</p>
                <Link to="/portfolio-project/service">
                    <h3 className="text-size-30 margin-bottom-0 text-center">▸Service</h3>
                </Link>
                <p className="text-size-20 margin-bottom-10 text-center">Services which I can offer</p>
                <Link to="/portfolio-project/contact">
                    <h3 className="text-size-30 margin-bottom-0 text-center">▸Contact</h3>
                </Link>
                <p className="text-size-20 margin-bottom-10 text-center">Contact information</p>
            </div>
        </>
    );
}