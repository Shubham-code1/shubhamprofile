
import btech from "../../../assets/kalinga.jpg";
import diploma from "../../../assets/dtekarnataka.jpg";
import sslc from "../../../assets/bseb.jpg";

function Education(){
    return (<>
    <section id="education" className="top-gap">
                 {/* section header */}
             

                 <header className="section-heads container-fluid d-flex flex-column        align-items-center pb-5">
                            <h1 className="fs-1 ">Education</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                </header>

                {/* section starts here */}
<div className="education-section container-fluid">

                <div className="container education-section border py-5">

                    <div className="row">
                        {/* first education */}
                        <div className="col-sm-4 mt-4 mt-sm-0">
                            <div className="card">
                                <div className="d-flex justify-content-center align-items-center p-3 ">
                                    <div className="edu-card-img-holder rounded-circle border faq-section">
                                        <img src={btech} className="card-img-top img-fluid" alt="na"/>
                                    </div>
                                </div>

                                <div className="card-body text-center">
                                <h5 className="text-head mb-1">Kalinga University, Raipur</h5>
                                    <h5 className="text-head mb-1">B. Tech</h5>
                                    <h6 className="py-0 my-0 text-head">Electrical engineering</h6>
                                    <p className="py-0 my-0">2014 - 2017</p>
                                    <p className="py-0 my-1">65.3%</p>
                                </div>
                                </div>
                        </div>

                        {/* second education */}
                        <div className="col-sm-4 mt-4 mt-sm-0">
                            <div className="card">
                                <div className="d-flex justify-content-center align-items-center p-3 ">
                                    <div className="edu-card-img-holder rounded-circle border faq-section">
                                        <img src={diploma} className="card-img-top img-fluid" alt="na"/>
                                    </div>
                                </div>

                                <div className="card-body text-center">
                                <h5 className="text-head mb-1">MS Ramaiah Polytechnic, Bangalore</h5>
                                    <h5 className="text-head mb-1">Diploma</h5>
                                    <h6 className="py-0 my-0 text-head">Electrical & Electronics</h6>
                                    <p className="py-0 my-0">2010 - 2013</p>
                                    <p className="py-0 my-1">81.6%</p>
                                </div>
                            </div>
                            
                        </div>

                        {/* third education */}
                        <div className="col-sm-4 mt-4 mt-sm-0">
                            <div className="card">
                                <div className="d-flex justify-content-center align-items-center p-3 ">
                                    <div className="edu-card-img-holder rounded-circle border faq-section">
                                        <img src={sslc} className="card-img-top img-fluid" alt="na"/>
                                    </div>
                                </div>

                                <div className="card-body text-center">
                                    <h5 className="text-head mb-1">Adarsh High school, Khudai</h5>
                                    <h5 className="text-head mb-1">SSLC</h5>
                                    <h6 className="py-0 my-0 text-head">All Subjects</h6>
                                    <p className="py-0 my-0">2009 - 2010</p>
                                    <p className="py-0 my-1">79%</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

</div>
    </section>
    </>)
};

export default Education;