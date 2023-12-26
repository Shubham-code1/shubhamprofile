import React from "react";
import flashcard from '../../../assets/flashcards.png';
import bookmovie from '../../../assets/bookmovie.jpg';
import ecomApp from '../../../assets/ecommapp.png';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";


const imageMap = {
    "flashcard":flashcard,
    "bookmovie":bookmovie,
    "ecomApp":ecomApp
};



function Project(){

    const [myProjects,setmyProjects] = useState(null);


    useEffect(()=>{
        const fetchAllProjects = async ()=>{
    
            try{
             const allProject = await fetch("https://profilebackend-lxbr.onrender.com/api/v1/profile/user/project",

             
             {
                 method:"GET"
             });
    
             if(allProject.ok){
                 const projects = await allProject.json();
                 setmyProjects(projects)
             }else{
                 alert('Failed to fetch projects:', allProject.status);
             }
            }catch(err){
                 alert("err fetching projects",err);
            }
         };
         fetchAllProjects();
       },[])
    

            return (<>
            <section id="project" className="mb-3">
                {/* section heading */}
                    <header className="section-heads container-fluid d-flex flex-column align-items-center py-5">
                            <h1 className="fs-1 ">Projects</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                    </header>




                    {/* project section */}

                    <div className="container-lg container-fluid pb-0 ">
                            <div className="row ">

                                            {
                                            myProjects ? myProjects.slice(0,3).map((el,index)=>{

                                                const projectImage = imageMap[el.projectimagepath]

                                                return(<div key={index} className="col-md-4 col-sm-6 mb-3">
                                                            
                                                <div className="card">
                                                    <div className=" mt-1 rounded-3 project-card-img-holder ">  
                                                            <img src={projectImage} className="card-img-top" alt="na"/> 
                                                    </div>
                                                    
                                                    <div className="card-body  px-2">
                                                        <div className="d-flex justify-content-between">
                                                            <h5 className="text-head">{el.title}</h5>
                                                            <div className="text-primary fs-5">
                                                            <a href="#ss" alt="na">
                                                                    <CiHeart/>
                                                                </a>
                                                            <span className="likes fs-6">{el.likes} likes</span>
                                                                
                                                        
                                                            </div>
                                                        </div>
                                                        <p className="text-para">{el.description}</p>

                                                    <div className="d-flex justify-content-between" >
                                                        <div>
                                                        <Link to={el.descpath} className="btn btn-primary">See details</Link>
                                                        </div>

                                                        <div>
                                                            <a href={el.gitlink} target="_blank" rel="noreferrer" className="btn btn-secondary mx-1"><FaGithub/></a>

                                                            <a href={el.hostlink} target="_blank" rel="noreferrer" className="btn btn-danger "><CiGlobe/></a>
                                                        </div>

                                                    </div>
                                                        
                                                    </div>
                                                </div>                              
                                                </div>)

                                            }) : null
                                            }
                    </div>
                    </div>

                    {/* see more button */}

                    <div className="container">

                        <div className="d-flex justify-content-end">
                                <Link to="/projects" className="text-decoration-none btn btn-primary rounded-circle ">
                                        +
                                </Link>

                               
                        </div>

                    </div>
                 

            </section>
            </>)
}

export default Project;




















