/*-------------------------------------------------------------------------------\
| Title: Service.jsx                                                             |
+--------------------------------------------------------------------------------+
| Student Name: Yu-Hsuan Chen                                                    |
| Student ID: 301448975                                                          |
| Date: 2024-09-28                                                               |
+--------------------------------------------------------------------------------+
| CODE DESCRIPTION                                                               |
| This file is used to generate the Service page.                                |
\-------------------------------------------------------------------------------*/
import Laravel from '../src/assets/Laravel.jpg';
import Programming from '../src/assets/Programming.jpg'

export default function Service() {
    return (
      <>
        <div className="section text-center">
          {/* title */}
          <h1>Services</h1>
          {/* services content */}
          <div className="container">
            <img className="img-left" src={Laravel}/>
            <div className="item-content">
              <h3 className="project-title text-size-30 ">Web Development</h3>
              <p className="item-text">
                Web development service specializes in creating robust and scalable applications using the Laravel framework. With Laravel's elegant syntax and powerful tools, I could build customized solutions that meet your business needs, ensuring high performance, security, and ease of maintenance.
              </p>
              <br/>
            </div>
            <div className="container">
              <img className="img-left" src={Programming}/>
              <div className="item-content">
                <h3 className="project-title text-size-30 ">General Programming</h3>
                <p className="item-text">
                  General programming service offers tailored software solutions across a variety of platforms and languages, designed to meet your specific business requirements. With a focus on clean, efficient code and scalable architecture, ensure that your software performs optimally while being easy to maintain and extend.
                </p>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }