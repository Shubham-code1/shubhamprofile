import { useState } from "react";
import AddSkills from "./addSkills";

function AdminPage(){

    const [projectObject,setProjectObject] = useState({
        title:"",
        description:"",
        descpath:"",
        gitlink:"",
        hostlink:"",
        projectimagepath:""
    });

    

    const [expObject,setExperienceObject] = useState({
        companyname:"",
        designation:"",
        duration:"",
        skills:"",
        updated:"",
        seemorepath:"",
        expimage:""
    })

   

    const handleProjectChange = (e) =>{
        const {name,value} = e.target;
            setProjectObject({...projectObject,[name]:value})
    }

   
    const handleExperienceChange = (e) =>{
        const {name,value} = e.target;
            setExperienceObject({...expObject,[name]:value})
    }



    const handleProjectSubmit = async (e) =>{

        e.preventDefault();

        let confirmSubmission = window.confirm("Are you sure want to add ?");

       try{
        if(confirmSubmission){
            

            console.log("projectObject",projectObject);

            const ProjectSubmissionResponse = await fetch("https://profilebackend-lxbr.onrender.com/api/v1/profile/admin/project",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json', 
                    //setting content-type of header
                },
                body:JSON.stringify(projectObject)
            });

            const addedProjectData = await ProjectSubmissionResponse.json();

            console.log(addedProjectData);
            resetProject();

            if (!ProjectSubmissionResponse.ok) {
                throw new Error('Network response was not ok.');
              }else{
                alert("Congrats! Project SuccessFully added");
              }

           
            
        }else{
            return;
        }
       }catch(err){
                alert(err.message);
       }

       
    }


    const handleExperienceSubmit = async (e) =>{

            e.preventDefault();

           try{

            const confirmAddition = window.confirm("Are you sure want to add ?");
            if(confirmAddition){

                const ExperienceAdditionResponse = await fetch("http://127.0.0.1:5000/api/v1/profile/admin/experience",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(expObject)
                });

                const addedExperienceData = await ExperienceAdditionResponse.json();

                console.log("addedExperienceData",addedExperienceData);
                if (!ExperienceAdditionResponse.ok) {
                    throw new Error('Network response was not ok.');
                  }else{
                    alert("Congrats! Project SuccessFully added");
                  }
    
                resetExperience();


            }else{
                return;
            }

           }catch(err){
            alert("Error::", err.message);
           }

            
    }


    // restiing the forms

    const resetProject = ()=>{
        setProjectObject({
            title:"",
            description:"",
            descpath:"",
            gitlink:"",
            hostlink:"",
            projectimagepath:""
        })
    };

    const resetExperience = ()=>{
        setExperienceObject({
            companyname:"",
        designation:"",
        duration:"",
        skills:"",
        updated:"",
        seemorepath:"",
        expimage:""
        })
    }


    return (<>
            <section className="top-gap">

                {/* section header */}
                        <header className="section-heads container-fluid d-flex flex-column align-items-center py-4">
                                        <h4 className="fs-3 ">Admin Page</h4>
                                        <div className="pendulum">
                                            <span className="to-fro rounded-circle"></span>
                                        </div>
                        </header>

                {/* section starts here */}

                        {/* project Addition form  */}

                        <div className="container faq-section mb-5 py-3 rounded-3">

                            <h4 className="text-head text-decoration-underline text-center">Add Projects</h4>
                            <div className="row">

                            <form action="http://127.0.0.1:5000//api/v1/profile/admin/project" method="POST" onSubmit={handleProjectSubmit}>

                                            <label htmlFor="title" className="text-black">Project Title :</label>
                                            <input type="text" name="title" id="title" placeholder="title" onChange={handleProjectChange} value={projectObject.title}/>

                                            <label htmlFor="description" className="text-black">Description :</label>
                                            <textarea cols="30" rows="4" name="description" id="description" placeholder="Enter description 200 char only"  onChange={handleProjectChange} value={projectObject.description}/>


                                            <label htmlFor="descpath" className="text-black">Path to access :</label>
                                            <input name="descpath" id="descpath" placeholder="path for description page" onChange={handleProjectChange} value={projectObject.descpath}></input>

                                            <label htmlFor="gitlink" className="text-black">Github Link :</label>
                                            <input name="gitlink" id="gitlink"  placeholder="Github link !" onChange={handleProjectChange} value={projectObject.gitlink}></input>

                                            <label htmlFor="hostlink" className="text-black">hosting Link :</label>
                                            <input name="hostlink" id="hostlink"  placeholder="hosting link !" onChange={handleProjectChange} value={projectObject.hostlink}></input>

                                            <label htmlFor="projectimagepath" className="text-black">Project Image Path :</label>
                                            <input name="projectimagepath" id="projectimagepath"  placeholder="Image Path" onChange={handleProjectChange} value={projectObject.projectimagepath}></input>
                                          
                                            
                                            <button className="btn btn-primary mt-4 ms-2" type="submit">Submit</button>

                                            <button className="btn btn-danger mt-4 ms-2" type="reset" onClick={resetProject}>Reset</button>
                                            
                                </form>
                        </div>
                        </div>


                        {/* Experience Addition form  */}

                        <div className="container faq-section mb-5 py-3 rounded-3">

                            <h4 className="text-head text-decoration-underline text-center">Add Experience</h4>
                            <div className="row">

                            <form action="http://127.0.0.1:5000/api/v1/profile/admin/experience" method="POST" onSubmit={handleExperienceSubmit}>

                                            <label htmlFor="companyname" className="text-black">Org Name :</label>
                                            <input type="text" name="companyname" id="companyname" placeholder="Organization Name" onChange={handleExperienceChange} value={expObject.companyname}/>

                                            <label htmlFor="designation" className="text-black">Designation :</label>
                                            <textarea type="email" name="designation" id="designation" placeholder="Enter description 200 char only"  onChange={handleExperienceChange} value={expObject.designation}/>

                                            <label htmlFor="duration" className="text-black">Duration :</label>
                                            <input name="duration" id="duration" placeholder="Month Year - Month Year" onChange={handleExperienceChange} value={expObject.duration}></input>
                                            

                                            <label htmlFor="skills" className="text-black">Skills used :</label>
                                            <input name="skills" id="skills"  placeholder="HTML,CSS,JS etc." onChange={handleExperienceChange} value={expObject.skills}></input>

                                            <label htmlFor="seemorepath" className="text-black">Description Path :</label>
                                            <input name="seemorepath" id="seemorepath"  placeholder="Description path" onChange={handleExperienceChange} value={expObject.seemorepath}></input>

                                            <label htmlFor="expimage" className="text-black">Exp Image Path :</label>
                                            <input name="expimage" id="expimage"  placeholder="image path !" onChange={handleExperienceChange} value={expObject.expimage}></input>
                                            

                                           
                                            
                                            <button className="btn btn-primary mt-4 ms-2" type="submit">Submit</button>

                                            <button className="btn btn-danger mt-4 ms-2" type="reset" onClick={resetExperience}>Reset</button>
                                            
                                </form>
                                
                                
                          
                        </div>
                        </div>

                        {/* importing skilss adding form  */}

                        <AddSkills/>
            </section>
    </>)
}

export default AdminPage;