import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

import { useState } from "react";


function Contact(){
   
    const [formObject,setFormObject] = useState({
        username:"",
        useremail:"",
        userquery:""
    });


    function handlechange(e){
        const {name,value} = e.target;
        setFormObject({...formObject,[name]:value})
    }
    
async function handlesubmit(e){

    e.preventDefault();
try{
        console.log(formObject);
    const response = await fetch("https://profilebackend-lxbr.onrender.com/api/v1/profile/user/contact",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json', 
            //setting content-type of header
        },
        body:JSON.stringify(formObject)
   });

   const responseData = await response.json();
   console.log("response is",responseData);
  localStorage.setItem("lastcontacted",JSON.stringify(responseData));

  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }else{
    alert("Thanks! I will contact you soon");
  }

        setFormObject({
            username:"",
            useremail:"",
            userquery:""
        });

}catch(err){
        alert("error form::",err.message);
}
    

}
    
    return(<>
            <section id="contact" className="">

                {/* section header */}

                <header className="section-heads container-fluid d-flex flex-column align-items-center py-5">
                            <h1 className="fs-1 ">Contact me</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                </header>

                {/* section starts here */}

                <div className="container-md contact-section ">
                            <div className="row p-2 ">
                                {/* left */}
                                <div className="col-sm-6 p-0 ">
                                   <div className="rounded-3 form-contact pb-3">
                                        <h3 className="text-center text-white pt-2">Contact Me</h3>
                                        <form action="http://127.0.0.1:5000/api/v1/profile/user/contact" method="POST" onSubmit={handlesubmit}>
                                            <label htmlFor="username">Name :</label>
                                            <input type="text" name="username" id="username" placeholder="Enter your name" onChange={handlechange} value={formObject.username}/>
                                            <label htmlFor="useremail">Email :</label>
                                            <input type="email" name="useremail" id="useremail" placeholder="Enter your email"  onChange={handlechange} value={formObject.useremail}/>
                                            <label htmlFor="userquery">Query :</label>
                                            <textarea name="userquery" id="userquery" cols="30" rows="5" placeholder="Enter your query !" onChange={handlechange} value={formObject.userquery}></textarea>
                                            
                                            <button className="btn btn-primary mt-4 ms-2" type="submit">Submit</button>

                                            <button className="btn btn-danger mt-4 ms-2" type="reset">Reset</button>
                                            
                                        </form>
                                   </div>
                            </div>
                                {/* right */}
                                <div className="col-sm-6  pt-3 pt-sm-0 ps-md-5">
                                    <h2 className="text-head">Let's Connect! Get in Touch Today.</h2>

                                    <p className="text-para fw-medium">
                                    Have a project in mind or need technical assistance? I'm here to help! Reach out to discuss your ideas, requirements, or any queries you may have. Your next big project is just a message away.
                                    </p>

                                    <h6 className="text-head ">Email me:-</h6>
                                    <a href="mailto:shubham.email01@gmail.com" className=" border p-1 rounded-1 mt-2 d-inline-block">
                                        <MdEmail /> shubham.email01@gmail.com
                                        </a>

                                        <h6 className="text-head mt-3">Call at:-</h6>

                                        <h6 className=" border p-1 rounded-1 text-head d-inline"><IoIosCall /> +91-620-146-8124</h6>

                                        <h6 className="text-head mt-3">Also available at:-</h6>
                                    


                                    <div className="d-flex justify-content-start">
                                        <div className="contact-icon p-2 border me-2 rounded-2">
                                               <a href="#cicon"><FaLinkedin className="c-icon text-head"/></a> 
                                        </div>
                                        <div className="contact-icon p-2 border mx-2 rounded-2">
                                                <a href="#cicon"><FaWhatsappSquare className="c-icon text-head"/></a>
                                        </div>

                                        <div className="contact-icon p-2 border mx-2 rounded-2">
                                                <a href="#cicon"><FaFacebookSquare className="c-icon text-head"/></a>
                                        </div>

                                        <div className="contact-icon p-2 border mx-2 rounded-2">
                                                <a href="#cicon"><FaInstagramSquare className="c-icon text-head"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>

            </section>
    </>)
}

export default Contact;