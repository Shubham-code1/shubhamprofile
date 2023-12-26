
import givni from "../../../assets/givni.png";
import scalene from "../../../assets/scalene.jpg";
import bridgeview from "../../../assets/bridgeview.webp";
import ina from "../../../assets/ina.png";
import { Link } from "react-router-dom";

function Experience(){
    return (<>
            <section id="experience" className="top-gap">

                {/* section header */}
             

                <header className="section-heads container-fluid d-flex flex-column align-items-center pb-5">
                            <h1 className="fs-1 ">Experience</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                </header>

                {/* section starts from here */}

                <div className="container-fluid exp-section py-4">

                    <div className="container py-2">

                        <div className="row justify-content-around">
                            
{/* experience 1 starts here*/}
        <div className="card mb-3 col-sm-5" >
        <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="exp-card-img-holder rounded-circle overflow-hidden faq-section">
                     <img src={givni} className="img-fluid rounded-start" alt="..."/>
                </div>
         
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="text-head mb-2">Givni Pvt. ltd., Patna</h5>

                <h6 className="text-para mb-0">Web Developer</h6>
                <p className="my-0 text-para fs-6 mb-2">May 2023 - till now..</p>
                <p className="card-text"><strong>Skills: </strong> HTML, CSS, JavaScript, React, Bootstrap, MongoDB, ExpressJS, NodeJS etc.</p>
                
                <div className="d-flex justify-content-between">
                <p className="card-text"><small className="text-body-secondary">Last updated 8 months ago</small></p>
                    <div>
                        <Link to="/experiences" className="text-decoration-none">See more</Link>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
        </div>
{/* experience 1 ends here*/}

{/* experience 2 starts here*/}
<div className="card mb-3 col-sm-5" >
        <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="exp-card-img-holder rounded-circle overflow-hidden faq-section">
                     <img src={scalene} className="img-fluid rounded-start" alt="..."/>
                </div>
         
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="text-head mb-2">ScaleneWorks LLP, Patna</h5>

                <h6 className="text-para mb-0">Analyst</h6>
                <p className="my-0 text-para fs-6 mb-2">June 2020 - May 2023</p>
                <p className="card-text"><strong>Skills: </strong> HTML, CSS, JavaScript,MS-office,Documentation, Bootstrap</p>
                <div className="d-flex justify-content-between">
                <p className="card-text"><small className="text-body-secondary">Last updated 8 months ago</small></p>
                    <div>
                        <Link to="/experiences" className="text-decoration-none">See more</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
{/* experience 2 ends here*/}

{/* experience 3 starts here*/}
<div className="card mb-3 col-sm-5" >
        <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="exp-card-img-holder rounded-circle overflow-hidden faq-section">
                     <img src={bridgeview} className="img-fluid rounded-start" alt="..."/>
                </div>
         
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="text-head mb-2">Bridgeview Maritime Pvt. ltd.</h5>

                <h6 className="text-para mb-0">Recruitment Executive</h6>
                <p className="my-0 text-para fs-6 mb-2">March 2019 - Oct 2019</p>
                <p className="card-text"><strong>Skills: </strong> MS-office, Documentation, Reporting, Data Analysis, Recruitment,onboarding etc</p>
                <div className="d-flex justify-content-between">
                <p className="card-text"><small className="text-body-secondary">Last updated 8 months ago</small></p>
                    <div>
                        <Link to="/experiences" className="text-decoration-none">See more</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
{/* experience 3 ends here*/}

{/* experience 4 starts here*/}
<div className="card mb-3 col-sm-5" >
        <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="exp-card-img-holder rounded-circle overflow-hidden faq-section">
                     <img src={ina} className="img-fluid rounded-start" alt="..."/>
                </div>
         
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="text-head mb-2">INA solution</h5>

                <h6 className="text-para mb-0">Talent Acquisition executive</h6>
                <p className="my-0 text-para fs-6 mb-2">March 2018 - March 2019</p>
                <p className="card-text"><strong>Skills: </strong> HTML, CSS, JavaScript, React, Bootstrap, MongoDB, ExpressJS, NodeJS etc.</p>
                <div className="d-flex justify-content-between">
                <p className="card-text"><small className="text-body-secondary">Last updated 8 months ago</small></p>
                    <div>
                        <Link to="/experiences" className="text-decoration-none">See more</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
{/* experience 4 ends here*/}

                        </div>
                    </div>
                </div>

            </section>
    </>)
}

export default Experience;