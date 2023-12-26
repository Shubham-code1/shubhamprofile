import { useState } from "react";



function AddSkills(){

 

    const [skillObject,setSkillObject] = useState({
        skilltype:"",
        skill:"",
        rating:"",
        years:"",
        durationtype:""
    });

    const handleSkillchange = (e)=>{
        const {name,value} = e.target;
        setSkillObject({...skillObject,[name]:value})
    };

    const handleSkillSubmit = async (e) =>{

        e.preventDefault();

        try{
                const skillsResponse = await fetch("https://profilebackend-lxbr.onrender.com/api/v1/profile/admin/skills",{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(skillObject)
                });
                
            

                if(!skillsResponse.ok){
                       throw new Error("Network Error :: Unable to Post data");
                }else{
                    alert("Skill added successfully to Profile");
                    resetSkill();
                }

                

        }catch(err){
            alert("Error::SKills adding",err.message)
        }

    }

    // reseting form skill 

    const resetSkill = ()=>{
        setSkillObject({
            skilltype:"",
            skill:"",
            rating:"",
            years:"",
            durationtype:""
        })
    }



    return (<>
             <div className="container faq-section mb-5 py-3 rounded-3">

<h4 className="text-head text-decoration-underline text-center">Add Skills</h4>
<div className="row">

    

<form action="http://127.0.0.1:5000/api/v1/profile/admin/skills" method="POST" onSubmit={handleSkillSubmit}>

                <label htmlFor="skilltype" className="text-black">Belongs To:</label>
                <select name="skilltype" id="skilltype" onChange={handleSkillchange} value={skillObject.skilltype}>
                            <option value="">Select</option>
                            <option  value="frontEnd">Frontend</option>
                            <option value="backend">Backend</option>
                </select>

                <label htmlFor="skill" className="text-black">Skill :</label>
                <input type="text" name="skill" id="skill" placeholder="Skill,Technology" onChange={handleSkillchange} value={skillObject.skill}/>

                <label htmlFor="rating" className="text-black">Rating :</label>
                <input type="number" name="rating" id="rating" placeholder="Enter value from 0 - 5"  onChange={handleSkillchange} value={skillObject.rating}/>

                <label htmlFor="years" className="text-black">Experience :</label>
                <input type="number" name="years" id="years" placeholder="Enter Years or months of experience" onChange={handleSkillchange} value={skillObject.years}></input>

                <label htmlFor="durationtype" className="text-black">Select Month/Years:</label>
                <select name="durationtype" id="durationtype" onChange={handleSkillchange} value={skillObject.durationtype}>
                    <option value="">Select</option>
                    <option  value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>


                
                <button className="btn btn-primary mt-4 ms-2" type="submit">Submit</button>

                <button className="btn btn-danger mt-4 ms-2" type="reset" onClick={resetSkill}>Reset</button>
                
    </form>
    
    

</div>
</div>
    </>)
};

export default AddSkills;