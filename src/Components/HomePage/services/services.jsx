
import serviceimg from "../../../assets/service2.jpg";
import { IoIosArrowDropright } from "react-icons/io";




function Service(){
    return (<>
            <section id="services" className="top-gap">
                {/* section heading */}
                <header className="section-heads container-fluid d-flex flex-column align-items-center pb-5">
                            <h1 className="fs-1 ">Services</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                </header>


                {/* service section starts */}

                {/* service1 starts */}

                <div className="container-lg">
                    <div className="row py-2">
                        {/* left */}
                        <div className="col-lg-6 service-image-holder">
                                <img src={serviceimg} alt="si" />
                        </div>
                        {/* right */}
                        <div className="col-lg-6">
                                <h3 className="text-head mt-md-4 mt-lg-0 mt-4">Elevating Brands through Digital Excellence.</h3>
                                <p className="text-para text-justify mt-3">
                                Offering expertise as a versatile Full-stack Developer, adept at crafting end-to-end solutions. Proficient in modern front-end technologies such as HTML, CSS, and JavaScript frameworks like React. Excels in back-end development with Node.js and database management. Specializes in delivering seamless user experiences while ensuring robust functionality across the application stack.
                                </p>

                                <div className="row">
                                    {/* left  */}
                                    <div className="col-sm-6">
                                        <a href="#myService">
                                            <h6 className="eachservice mt-4"><IoIosArrowDropright class="service-icon"/> End to End Development</h6>
                                        </a>
                                        <a href="#myService">
                                            <h6 className="eachservice mt-4"><IoIosArrowDropright class="service-icon"/> Front-end expertise</h6>
                                        </a>
                                        <a href="#myService">
                                            <h6 className="eachservice mt-4"><IoIosArrowDropright class="service-icon"/> Backend Proficiency</h6>
                                        </a>
                                        <a href="#myService">
                                            <h6 className="eachservice mt-4"><IoIosArrowDropright class="service-icon"/> Database Management</h6>
                                        </a>
                                    </div>
                                    {/* right */}
                                    <div className="col-sm-6">
                                        <a href="#myService">
                                            <h6 className="eachservice mt-4"><IoIosArrowDropright class="service-icon"/> API Development</h6>
                                        </a>

                                       <a href="#myService"> 
                                       <h6 className="eachservice mt-4"><IoIosArrowDropright class="service-icon"/> Version Control</h6>
                                       </a>

                                        <a href="#myService">
                                            <h6 className="eachservice mt-4"><IoIosArrowDropright class="service-icon"/> Performance Optimization</h6>
                                        </a>

                                       <a href="#myService">
                                         <h6 className="eachservice mt-4"><IoIosArrowDropright class="service-icon"/> Testing & Debugging</h6>
                                         </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                {/* service 1 ends */}

            </section>
    </>)
};

export default Service;