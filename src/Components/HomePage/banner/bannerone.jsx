
// import banner2 from "../../../assets/banner5.jpg";
import myPhoto from "../../../assets/photo.png"
// import { FaBriefcase } from "react-icons/fa6"; 
import { Typewriter } from 'react-simple-typewriter'
// import { IoIosDocument } from "react-icons/io";
// import Slider from "react-slick";




function BannerOne(){

       
    
    return (<>
            <section className="top-gap container-fluid p-0" id="home">
                <div className="container-fluid x pt-5">
                    {/* first slider */}
                                <div className="row">

                                        {/* left side */}
                                        <div className="col-md-6 d-flex align-items-center">
                                                <div className="fs-l-img-holder">
                                                    <img src={myPhoto} alt="na" />
                                                </div>
                                        </div>

                                        {/* right side */}
                                        <div className="col-md-6 fs-r d-flex flex-column align-items-md-start align-items-center">
                                                <h1 className="py-2 fs-r-head fs-sm-6 fs-1">Hi, I'm Shubham Kumar</h1>

                                                <h2 className="py-2 d-flex align-items-center fs-r-type-head fs-sm-2 fs-3"> 
                                                        <span className="">
                                                        <Typewriter 
                                                        words={['Frontend Developer', 'UI Developer', 'FullStack Developer']}
                                                        loop={0}
                                                        cursor={true}
                                                        cursorStyle={"_"}
                                                        cursorColor="rgb(2, 2, 70)"
                                                        typeSpeed={70}
                                                        deleteSpeed={50}
                                                        delaySpeed={1000}
                                                        />
                                                        </span>
                                                </h2>

                                                <p className="text-justify py-3 pe-sm-5  fs-r-para fs-4">I am 2 years experienced Front End Developer, an artist who paints with code. I bring websites and apps to life, making them beautiful and easy to use. 
                                                {/* Every line of code is a brushstroke on the canvas of innovation, each project a new chapter in my ever-evolving journey. With an insatiable curiosity, I delve into the depths of technology, embracing the rhythm of learning that orchestrates my growth. I'm always learning, exploring new ways to create amazing experiences for users. It's like solving puzzles every day, and I love it! But I don't just stop at the front end, I also work on the backend, making sure everything runs smoothly behind the scenes.I'm like a builder, constructing digital homes where people can live, work, and play. And as technology keeps growing, I keep learning, always ready to create something incredible. */}
                                                
                                                </p>

                                               <div className="py-2 d-flex justify-content-start fs-r-btn">
                                                    <a href="'../../../assets/resume/myresume.pdf" download="myresume.pdf" className="btn btn-primary me-3">See Resume</a>

                                                    <a href="#project" className="btn btn-primary me-3">Projects</a>
                                                   
                                               </div>
                                                
                                        </div>

                                </div> 
                </div>
                
            </section>
    </>)
};


export default BannerOne;