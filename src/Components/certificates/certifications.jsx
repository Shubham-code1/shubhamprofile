import EachSKill from "./eachSkill";
import { useState,useEffect } from "react";
import Spinner from "../common/spinner";

import htmlintro from "../../assets/certificates/HTMLintro.png";
import fundaofweb from "../../assets/certificates/fundaofwebdev.png";
import introtoweb from "../../assets/certificates/introtoweb.png";
import jsfundamental from "../../assets/certificates/jsfunda.png";
import jsonbrowser from "../../assets/certificates/jsonbrowser.png";
import jsfuncoop from "../../assets/certificates/jsfunc&oop.png";
import reacteco from "../../assets/certificates/reactEcoSystem.png" ;
import advanceReact from "../../assets/certificates/advanceReact.png";
import dsa from "../../assets/certificates/dsa.png";
import databases from "../../assets/certificates/databases.png";
import nrdatabase from "../../assets/certificates/NRdatabase.png";
import nodeexpress from "../../assets/certificates/nodeexpress.png";
import frontendProject from "../../assets/certificates/Frontendproject.png";
import backendproject from "../../assets/certificates/backendproject.png";

const imageMap = [htmlintro,fundaofweb,introtoweb,jsfundamental,jsonbrowser,
                    jsfuncoop,reacteco,advanceReact,dsa,databases,nrdatabase,
                    nodeexpress,frontendProject,backendproject];


function Certificates(){
    const [skillsData,setSkillsData] = useState();

    const [zoomedImage,setImagezoom] = useState(null);

    const handleImageClick = (image) => {
        console.log("Clicked on image");
        setImagezoom(image);
      };
    
      const closeZoom = () => {
        setImagezoom(null);
      };


// fetching the Skills Data from database
        useEffect(()=>{
            const fetchSkills = async () =>{
                
                try{
                 const fetchedResponse = await fetch("https://profilebackend-lxbr.onrender.com/api/v1/profile/user/skills",{
                     method:"GET"
                 });
     
                 const response = await fetchedResponse.json();
     
                 if(fetchedResponse.ok){
                     setTimeout(()=>{
                        setSkillsData(response);
                     },2000)
                    
                 }else{
                     throw new Error("Network Error :: Data not fetched");
                 }
                }catch(err){
                     alert("Error:: Skills data fetching")
                }
             };

             fetchSkills();
        },[]);

    return (<>
            <section id="certificates" className="top-gap">

                {/* section heading */}
                <header className="section-heads container-fluid d-flex flex-column align-items-center pb-5 pt-3">
                            <h1 className="fs-1 ">Skills</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                    </header>


                {/* skills section starts from here */}

                <div className="container border faq-section py-3 rounded-5">
                    <div className="row">

                        {/* frontend skills */}
                        <div className="col-sm-6">
                            <h3 className="text-center text-head">Frontend</h3>

                            <div className="p-1">

                                {
                                   !skillsData ? <Spinner/> :  skillsData.filter((el)=>{
                                            return el.skilltype === "frontEnd";
                                   }).map((el,index)=>{
                                        return(<>
                                                <EachSKill key={index} value={{
                                                    rating:el.rating,
                                                    years:el.years,
                                                    skill:el.skill,
                                                    durationtype:el.durationtype,
                                                    _id:el._id
                                                    }}/>
                                        </>)
                                   })
                                }

                            </div>
                        </div>

                        {/* backend skills */}
                        <div className="col-sm-6">
                                <h3 className="text-center text-head">Backend</h3>

                                <div className="p-1">

                                                    {
                                                    !skillsData ? <Spinner/> :  skillsData.filter((el)=>{
                                                                return el.skilltype === "backend";
                                                    }).map((el,index)=>{
                                                            return(<>
                                                                    <EachSKill key={index} value={{
                                                                        rating:el.rating,
                                                                        years:el.years,
                                                                        skill:el.skill,
                                                                        durationtype:el.durationtype,
                                                                        _id:el._id
                                                                        }}/>
                                                            </>)
                                                    })
                                                    }

                                </div>

                        </div>
                    </div>
                </div>

                {/* skill section ends here */}



                {/* Certificates section starts here  */}

                <header className="section-heads container-fluid d-flex flex-column align-items-center  py-5">
                            <h1 className="fs-1 ">Cerificates & Achievements</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                </header>


{/* certificate display section */}
                <div className="container">
                            <div className="row ">

                                {/* first cert */}
                                        {
                                            imageMap.map((el,index)=>{
                                                return (<div key={index} className="col-md-4 col-sm-2 p-3 mt-3 ">

                                                    <div className=" rounded-3 cert-display p-1 border rounded-2 overflow-hidden faq-section">
                                                <img 
                                                src={el} 
                                                alt={`NA`} 
                                                onClick={()=>{
                                                    handleImageClick(el)
                                                }}
                                                
                                                /> 
                                                </div>
                                </div>)
                                            })
                                        }
                            </div>
                </div>




                {/* modal which will be appeared when clicked on image to see larger image */}


                   {zoomedImage && (
                        <div className="zoomModal border border-black">
                        {/* <span className="close-btn btn bg bg-danger rounded-circle text-white" onClick={closeZoom}>
                            X
                        </span> */}
                        <div className="modal-content">
                        <span className="close-btn btn bg bg-danger rounded-circle text-white" onClick={closeZoom}>
                            X
                        </span>
                            <img src={zoomedImage} alt="Zoomed Certificate" />
                        </div>
                        </div>
                    )}





            </section>
    </>)
}

export default Certificates;