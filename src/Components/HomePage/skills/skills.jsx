import Slider from "react-slick";
import html from '../../../assets/html.png';
import css from '../../../assets/css.png';
import js from "../../../assets/js.png";
import bootstrap from "../../../assets/bootstrap.jpeg";
import nodejs from "../../../assets/node.png";
import expressjs from "../../../assets/express.png";
import mongodb from "../../../assets/mongodb.png";
import sql from "../../../assets/sql.png";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";



function Skills(){

    const [slidesToShow,setSlideToSHow] = useState(2);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000
      };


      useEffect(()=>{
        function updateSlideToShow(){
            const size = window.innerWidth;
                if(size > 992 && size < 1200){
                    setSlideToSHow(6);
                }else if(size < 992 && size > 768){
                    setSlideToSHow(5);
                }else if(size > 576 && size < 768){
                    setSlideToSHow(2);
                }else if(size < 576 ){
                    setSlideToSHow(2);
                }else{
                    setSlideToSHow(8);
                }
          }

          updateSlideToShow();

          window.addEventListener('resize', updateSlideToShow);

          return () => {
            window.removeEventListener('resize', updateSlideToShow);
          };
      },[])
      



    return (<>
            <section id="skill" className="skillsection pb-3">
 {/* section heading */}
                <header className="section-heads container-fluid d-flex flex-column align-items-center pb-5">
                            <h1 className="fs-1 ">Skills</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                    </header>


{/* skill slider */}

                <div className="container-fluid skill-sliders pt-4">

                    <Slider {...settings}>

                        {/* first slider starts*/}
                            <div className="px-4 ">
                                <div className="border rounded-3 p-lg-2 p-2 p-md-3 each-skill">

                                    <div className="border rounded-2 skill-img-holder">
                                        <img src={html} alt="html" className=" skill-img"/>
                                    </div>
                                    <h5 className="text-center mt-3">HTML</h5>

                                </div>
                            </div>

                    {/* first slider ends */}

                             {/* first slider starts*/}
                             <div className="px-4 ">
                                <div className="border rounded-3 p-lg-2 p-2 p-md-3 each-skill">

                                    <div className="border rounded-2 skill-img-holder">
                                        <img src={css} alt="html" className="img-fluid skill-img"/>
                                    </div>
                                    <h5 className="text-center mt-3">CSS</h5>

                                </div>
                            </div>

                    {/* first slider ends */}
                       {/* first slider starts*/}
                       <div className="px-4 ">
                                <div className="border rounded-3 p-lg-2 p-2 p-md-3 each-skill">

                                    <div className="border rounded-2 skill-img-holder">
                                        <img src={js} alt="html" className="img-fluid skill-img"/>
                                    </div>
                                    <h5 className="text-center mt-3">Javascript</h5>

                                </div>
                            </div>

                    {/* first slider ends */}
                       {/* first slider starts*/}
                       <div className="px-4 ">
                                <div className="border rounded-3 p-lg-2 p-2 p-md-3 each-skill">

                                    <div className="border rounded-2 skill-img-holder">
                                        <img src={bootstrap} alt="html" className="img-fluid skill-img"/>
                                    </div>
                                    <h5 className="text-center mt-3">Bootstrap</h5>

                                </div>
                            </div>

                    {/* first slider ends */}
                       {/* first slider starts*/}
                       <div className="px-4 ">
                                <div className="border rounded-3 p-lg-2 p-2 p-md-3 each-skill">

                                    <div className="border rounded-2 skill-img-holder">
                                        <img src={nodejs} alt="html" className="img-fluid skill-img"/>
                                    </div>
                                    <h5 className="text-center mt-3">NodeJS</h5>

                                </div>
                            </div>

                    {/* first slider ends */}
                       {/* first slider starts*/}
                       <div className="px-4 ">
                                <div className="border rounded-3 p-lg-2 p-2 p-md-3 each-skill">

                                    <div className="border rounded-2 skill-img-holder">
                                        <img src={expressjs} alt="html" className="img-fluid skill-img"/>
                                    </div>
                                    <h5 className="text-center mt-3">ExpressJS</h5>

                                </div>
                            </div>

                    {/* first slider ends */}
                       {/* first slider starts*/}
                       <div className="px-4 ">
                                <div className="border rounded-3 p-lg-2 p-2 p-md-3 each-skill">

                                    <div className="border rounded-2 skill-img-holder">
                                        <img src={mongodb} alt="html" className="img-fluid skill-img"/>
                                    </div>
                                    <h5 className="text-center mt-3">MongoDB</h5>

                                </div>
                            </div>

                    {/* first slider ends */}
                     {/* first slider starts*/}
                     <div className="px-4 ">
                                <div className="border rounded-3 p-lg-2 p-2 p-md-3 each-skill">

                                    <div className="border rounded-2 skill-img-holder">
                                        <img src={sql} alt="html" className="img-fluid skill-img"/>
                                    </div>
                                    <h5 className="text-center mt-3">SQL</h5>

                                </div>
                            </div>

                    {/* first slider ends */}
                     {/* first slider starts*/}
                     <div className="px-4 ">
                                <div className="border rounded-3 p-lg-2 p-2 p-md-3 each-skill">

                                    <div className="border rounded-2 skill-img-holder">
                                        <img src={git} alt="html" className="img-fluid skill-img"/>
                                    </div>
                                    <h5 className="text-center mt-3">git</h5>

                                </div>
                            </div>

                    {/* first slider ends */}
                     {/* first slider starts*/}
                     <div className="px-4 ">
                                <div className="border rounded-3 p-lg-2 p-2 p-md-3 each-skill">

                                    <div className="border rounded-2 skill-img-holder">
                                        <img src={github} alt="html" className="img-fluid skill-img"/>
                                    </div>
                                    <h5 className="text-center mt-3">Github</h5>

                                </div>
                            </div>

                    {/* first slider ends */}
                    </Slider>

                </div>

                <div className="container-fluid mt-4 text-end ">
                        <Link to="/certificates" className="btn btn-primary  me-sm-4 rounded-circle ">+</Link>
                </div>

            </section>
    </>)
};

export default Skills;