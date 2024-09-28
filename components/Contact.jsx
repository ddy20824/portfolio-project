/*-------------------------------------------------------------------------------\
| Title: Contact.jsx                                                             |
+--------------------------------------------------------------------------------+
| Student Name: Yu-Hsuan Chen                                                    |
| Student ID: 301448975                                                          |
| Date: 2024-09-28                                                               |
+--------------------------------------------------------------------------------+
| CODE DESCRIPTION                                                               |
| This file is used to generate the Contact page.                                |
\-------------------------------------------------------------------------------*/
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Contact() {
    /**
     * Define form data structure
     */
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      /**
       * Set formData when input changed
       * @param {*} event
       */
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };

      /**
       * Get formData and display in a dialog
       * @param {*} event 
       */
      const handleSubmit = (event) => {
        event.preventDefault();
        const display = document.getElementById("display");
        display.innerHTML = "First name: " + formData.firstName + "<br/>Last Name: " + formData.lastName + "<br/>Email: " + formData.email + "<br/>Message: " + formData.message;
        document.getElementById("modal").showModal();
      };

      /**
       * navigate to Home page when user close dialog
       */
      let navigate = useNavigate();
      const closeDialog = () => {
        document.getElementById("modal").close();
        navigate("/portfolio-project");
      };

    return (
      <>
        <div className="section text-center">
            {/* title */}
            <h1>Contact Me</h1>
            {/* contact information panel */}
            <div className="panel">
                <p className=" text-left text-size-20">Email: ddy20824@gmail.com<br/>Phone: +1 416 262 4742</p>
            </div>
            {/* contact form */}
            <form name="contactForm" className="customform" onSubmit={handleSubmit}>
                <h2>First Name</h2>
                <input name="firstName" placeholder="Your first name" title="Your first name" type="text" value={formData.firstName} onChange={handleChange}/>
                <br/><br/>
                <h2>Last Name</h2>
                <input name="lastName" placeholder="Your last name" title="Your last name" type="text" value={formData.lastName} onChange={handleChange}/>
                <br/><br/>
                <h2>Email</h2>
                <input name="email" width="12" placeholder="Your e-mail" title="Your e-mail" type="text" value={formData.email} onChange={handleChange}/>
                <br/><br/>
                <h2>Message</h2>
                <textarea name="message" placeholder="Your message" rows="3" value={formData.message} onChange={handleChange}></textarea>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
            {/* dialog structure */}
            <div>
                <dialog id="modal" className="dialog">
                    <h2>Thank you for your message!</h2>
                    <h3 id="display" className='text-dialog'></h3>
                    <button id="closeModal" onClick={closeDialog}>Close</button>
                </dialog>
            </div>
        </div>
      </>
    );
  }