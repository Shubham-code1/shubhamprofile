import givni from "../../assets/givni.png";
import scalene from "../../assets/scalene.jpg";
import bridgeview from "../../assets/bridgeview.webp";
import ina from "../../assets/ina.png";

function ExperienceDetail(){
    return(<>
            <section className="top-gap">

                        {/* section heading */}
                                <header className="section-heads container-fluid d-flex flex-column align-items-center py-4 ">
                                            <h1 className="fs-1 ">Experience</h1>
                                            <div className="pendulum">
                                                <span className="to-fro rounded-circle"></span>
                                            </div>
                                    </header>

                        {/* experience section starts here  */}
                        <div className="container">
                                        {/* first experience Givni Pvt ltd */}

                                        <div className="p-3 border rounded-3 faq-section mt-3">

                                            <div className="d-flex">
                                                <div className="exps-img-holder border faq-section rounded-circle overflow-hidden align-self-center">
                                                        <img src={givni} alt="na" className=""/>
                                                </div>

                                                <div className="align-self-center ps-5 ">
                                                    <h2 className="">Givni Pvt. Ltd.</h2>
                                                    <h5 className="">Web Developer</h5>
                                                    <h6 className="">16th May 2023 - till Now</h6>
                                                    <p><strong></strong></p>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-3">
                                                <h5 className="text-decoration-underline">Responsibilities :-</h5>
                                                <ul>
                                                    <li>Working on front-end programming languages such as JavaScript, CSS3, and HTML5. </li>
                                                    <li>Create website layout/user interface by using standard HTML/CSS practices</li>
                                                    <li>Integrate data from various back-end services like expressJs,NodeJs and databases like MongoDB.</li>
                                                    <li>Understand website interfaces, cross-browser interoperability, and web standards </li>
                                                    <li>Worked on Framework and Libraries like React,ExpressJs etc</li>
                                                    <li>Understands the Asynchronous Programming.</li>
                                                    <li>Maintaining and updating websites</li>
                                                    <li>Working with graphics and other designers</li>
                                                </ul>
                                            </div>
                                        </div>


                                        {/* first experience ends */}


                                          {/* Second experience ScaleneWorks Pvt ltd */}

                                            <div className="p-3 border rounded-3 faq-section mt-3">

                                                <div className="d-flex">
                                                    <div className="exps-img-holder border faq-section rounded-circle overflow-hidden align-self-center">
                                                            <img src={scalene} alt="na" className=""/>
                                                    </div>

                                                    <div className="align-self-center ps-5 ">
                                                        <h2 className="">ScaleneWorks LLP</h2>
                                                        <h5 className="">Specialist (joined as Analyst)</h5>
                                                        <h6 className="">June 2020 - May 2023</h6>
                                                        <p><strong></strong></p>
                                                    </div>
                                                </div>

                                                <div className="mt-3">
                                                    <h5 className="text-decoration-underline">Responsibilities :-</h5>
                                                    <ul>
                                                        <li>Create website layout/user interface by using standard HTML/CSS practices</li>
                                                        <li>Worked with microsite development team</li>
                                                        <li>Worked on recruitment portal development</li>
                                                        <li>Client handling,iteraction and documentation.</li>
                                                        <li>Liasoning with govt department.</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* second experience Scalene ends */}

                                             {/* Third experience Bridgeview Pvt ltd */}

                                            <div className="p-3 border rounded-3 faq-section mt-3">

                                                        <div className="d-flex">
                                                            <div className="exps-img-holder border faq-section rounded-circle overflow-hidden align-self-center">
                                                                    <img src={bridgeview} alt="na" className=""/>
                                                            </div>

                                                            <div className="align-self-center ps-5 ">
                                                                <h2 className="">Bridgeview Pvt. Ltd.</h2>
                                                                <h5 className="">Recruitment Executive</h5>
                                                                <h6 className="">March 2019 - Oct 2019</h6>
                                                            </div>
                                                        </div>

                                                        <div className="mt-3">
                                                            <h5 className="text-decoration-underline">Responsibilities :-</h5>
                                                            <ul >
                                                                <li>End-to-End Recruitment</li>
                                                                <li>Profile sourcing, screening, interviewing, onboarding etc.</li>
                                                                <li>Proficient using the hiring portals Naukri.com,etc</li>
                                                                <li>Sourcing profile related to IT,NonIT etc.</li>
                                                                <li>Maintaining the documentation, and reporting periodically.</li>
                                                                <li>Database management.</li>
                                                            </ul>
                                                        </div>

                                            </div>

{/* Third experience ends */}

                            {/* Fourth experience INA solution Pvt ltd */}

                            <div className="p-3 border rounded-3 faq-section mt-3">

                            <div className="d-flex">
                                <div className="exps-img-holder border faq-section rounded-circle overflow-hidden align-self-center">
                                        <img src={ina} alt="na" className=""/>
                                </div>

                                <div className="align-self-center ps-5 ">
                                    <h2 className="">INA Solution</h2>
                                    <h5 className="">Talent Acquisition Executive</h5>
                                    <h6 className="">March 2018 - March 2019</h6>
                                </div>
                            </div>

                            <div className="mt-3">
                                <h5 className="text-decoration-underline">Responsibilities :-</h5>
                                <ul>
                                    <li>End-to-End US IT Recruitment</li>
                                    <li>Source candidates based on different Tax Terms like W2,C2C,1099,H4 etc.</li>
                                    <li>Profile sourcing, screening, interviewing, onboarding etc.</li>
                                    <li>Proficient using the hiring portals Monster,Dice,etc.</li>
                                    <li>Sourced profile related to IT,NonIT etc.</li>
                                    <li>Maintaining the documentation, and reporting periodically.</li>
                                    <li>Database management.</li>
                                </ul>
                            </div>

                            </div>

                            {/* Fourth experience INA ends */}



                                    

                        </div>
                        

                            

            </section>
    </>)
};

export default ExperienceDetail;