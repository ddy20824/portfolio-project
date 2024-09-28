/*-------------------------------------------------------------------------------\
| Title: Project.jsx                                                             |
+--------------------------------------------------------------------------------+
| Student Name: Yu-Hsuan Chen                                                    |
| Student ID: 301448975                                                          |
| Date: 2024-09-28                                                               |
+--------------------------------------------------------------------------------+
| CODE DESCRIPTION                                                               |
| This file is used to generate the Project page.                                |
\-------------------------------------------------------------------------------*/
import projectImgOne from '../src/assets/CFD-Group6.png';
import projectImgTwo from '../src/assets/GameDevelopment.png';
import projectImgThree from '../src/assets/MERN.jpg';

export default function Project() {
    return (
        <>
            <div className="section text-center">
                {/* title */}
                <h1>My Projects</h1>
                {/* project content */}
                <div className="text-center">
                    <div className="container">
                        <img className="img-left" src={projectImgOne}/>
                        <div className="item-content">
                            <h3 className="text-size-30 ">Sofeware System Design</h3>
                            <p className="item-text">
                            The e-commerce website SSD document outlines the architecture, system design, and functional requirements for an online retail platform. This includes detailed descriptions of the product catalog, user authentication, payment gateway integration, and order management systems. The document covers essential aspects such as database schemas, server-side logic, API interactions, and security protocols. I am working on diagrams and database schemas.
                            </p>
                            <br/>
                        </div>
                    </div>
                    <div className="container">
                        <img className="img-left" src={projectImgTwo}/>
                        <div className="item-content">
                            <h3 className="text-size-30 ">Game Development Project</h3>
                            <p className="item-text">
                            The puzzle mystery game project focuses on creating an immersive and challenging experience where players solve intricate puzzles to uncover hidden secrets. This project is a team project for two members, and I am currently working on design and game logic part.
                            </p>
                            <br/>
                        </div>
                    </div>
                    <div className="container">
                        <img className="img-left" src={projectImgThree}/>
                        <div className="item-content">
                            <h3 className="text-size-30 ">Web Development Project</h3>
                            <p className="item-text">
                            The MERN project involves building a full-stack web application using MongoDB, Express.js, React, and Node.js. The project is a team project. I am currently working on it.
                            </p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
