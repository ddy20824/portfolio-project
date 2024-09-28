/*-------------------------------------------------------------------------------\
| Title: About.jsx                                                               |
+--------------------------------------------------------------------------------+
| Student Name: Yu-Hsuan Chen                                                    |
| Student ID: 301448975                                                          |
| Date: 2024-09-28                                                               |
+--------------------------------------------------------------------------------+
| CODE DESCRIPTION                                                               |
| This file is used to generate the About page.                                  |
\-------------------------------------------------------------------------------*/
import myPicture from '../src/assets/myPicture.jpg';
import myResume from '../src/assets/Resume.pdf';

function About(){
    return(
        <>
            <div className="section text-center">
                {/* title */}
                <h1>About Me</h1>
                <div className="container">
                        {/* my picture */}
                        <img className="img-center" src={myPicture} alt="my photo"/>
                        {/* description and resume link */}
                        <div className="content-right">
                            <p className="text-size-30 margin-bottom-0 text-center">Yu-Hsuan Chen</p>
                            <p className="text-size-20 text-left">
                            I am a seasoned website backend developer with over 7 years of experience, specializing in PHP (Laravel) and a broad range of website development technologies. My focus is on building high-performance, scalable, and easy-to-maintain products that deliver lasting value.
                            </p>
                            <br/>
                            <a target="_blank" href={myResume}><i className="text-size-25">▸ My Resume</i></a>
                        </div>
                </div>
            </div>
        </>
    )
}

export default About