
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Slider from "react-slick";
import { useState,useRef,useEffect } from "react";
import Spinner from "../../common/spinner";




function Testimonials(){
const formRef = useRef();

const [myFeedback,setMyFeedBack] = useState([]);
const [isLoading,setLoading] = useState(true);

const [formobject,setFormObject] = useState({
        feedname:"",
        location:"",
        feed:"",
        rating:""
    });

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
        ]
      };

      function handlechange(e){
        const {name,value} = e.target;
        setFormObject({...formobject,[name]:value})
    }

      const handleSubmit = async (e) =>{
                
                e.preventDefault();


                try{
                   const response = await fetch("https://profilebackend-lxbr.onrender.com/api/v1/profile/user/feeds",{
                        method:"POST",
                        headers:{
                            'Content-Type': 'application/json', 
                            //setting content-type of header
                        },
                        body:JSON.stringify(formobject)
                    });
                    const responseData = await response.json();

                    localStorage.setItem("lastFeedback",JSON.stringify(responseData));
                   
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                      }else{
                        alert("Thank you for your feedback");
                      }

                      setFormObject({
                        feedname:"",
                        location:"",
                        feed:"",
                        rating:""
                    });

                }catch(err){
                    alert(err.message);
                    return;
                }
            }

            // fetching data of feedbacks

            useEffect(()=>{
                const fetchData = async() =>{

                    try{
                         const feedbackResponse = await fetch("https://profilebackend-lxbr.onrender.com/api/v1/profile/user/feeds",{
                                     method:"GET"
                             });
 
                             if(feedbackResponse.ok){
                                 const allFeedbacks = await feedbackResponse.json();
                                 setMyFeedBack(allFeedbacks);
                                 setLoading(false);
                             }else{
                                 alert("Oh ! Network error occured ");
                             }
                    }
                    catch(err){
                             alert("Error::", err.message);
                    }
             };
                    fetchData();
            },[isLoading]);

            // console.log("myFeedback",myFeedback);

    return(<>
            <section className="" id="testimonial">

                {/* section header */}

                <header className="section-heads container-fluid d-flex flex-column align-items-center py-5">
                            <h1 className="fs-1 ">User reviews</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                </header>

                    {/* Review slider Section */}
                    {/* {!isLoading && ( */}
                    <div className="container overflow-hidden">
                                {/* <Slider {...settings}> */}


{/* mapping of data present in database from feedback section*/}


{
        isLoading ?  <Spinner/> :

        (<Slider {...settings}>

        {   myFeedback.map((el,index)=>{


                const starsToAppear = (rating) =>{
                                let stars = [];
                                let totalStars = 5;

                                for(let i=1; i<=totalStars; i++){
                                    if(i<=rating){
                                        stars.push(<FaStar key={i}/>)
                                    }else{
                                        stars.push(<FaRegStar key={i}/>)
                                    }
                                };

                                return stars;
                            }

                return (<div key={index} className="main-slider-div">
                <div className="col mb-3 mb-sm-0 card-main-div">
                                            <div className="card">
                                            <div className="card-body">

                                                <div className="d-flex justify-content-start align-items-center">
                                                    <div className="testimony-img-holder border d-flex align-items-center justify-content-center rounded-circle">
                                                        <h1 className="fs-1">{el.feedname.slice(0,1).toUpperCase()}</h1>
                                                    </div>

                                                    <div className="ms-3 d-flex flex-column justify-content-end">
                                                        <span className="staricon">
                                                        {/* In React, when we return an array of JSX elements from a function or a variable and then use that directly within JSX, it gets rendered without explicitly using .map().  
                                                        Here , i could have also used map as below function is returning array of stars component */}
                                                        {
                                                        starsToAppear(el.rating)
                                                        }
                                                        </span>
                                                        <p className="rating border mt-2 px-1 rounded-1 text-white">rating {`${el.rating}.0`}</p>
                                                    </div>
                                                </div>
                                                
                                                <h6 className="card-title my-0 mb-1 py-0">{el.feedname}</h6>
                                                <em className="location-user mt-1">{el.location}</em>
                                                <p className="card-text fs-6">{el.feed}</p>
                                                {/* <a href="#testimonycard" class="btn btn-primary">Go somewhere</a> */}
                                            </div>
                                            </div>
                                        </div>
                </div>)

            })
        }

</Slider>    
)}


{/* mapping ends of data present in database from feedback section */}





          
                                      
                    </div>
                    {/* )} */}

                    {/* submitting review section  */}

                    <div className="container-fluid submit-review p-sm-5 mt-5 ">
                        <div className="row">
                            {/* left area */}
                            <div className="col-sm-6 align-items-left justify-content-start pt-3 d-flex flex-column">
                                    <h1 className="text-head text-left">Share Your Experience! </h1>
                                    <h2 className="text-head text-left">I Value Your Feedback.</h2>
                                    <p className="text-para mt-3 fw-medium">Your opinion matters! If you've worked with us, we'd love to hear about your experience. Your feedback helps us improve and ensures we continue delivering top-notch solutions. Please take a moment to share your thoughts and insights on our services as a Full Stack Developer. Thank you for your support!</p>
                                    <h4 className="text-head">Thanks</h4>
                            </div>
                            {/* right area */}
                            <div className="col-sm-6 p-sm-4">
                                   <div className="border border-black rounded-3 form-feedback pb-3">
                                        <h3 className="text-center text-white pt-2">FeedBack Form</h3>
                                        <form action="http://127.0.0.1:5000/api/v1/profile/contact" onSubmit={handleSubmit} ref={formRef}>
                                            <label htmlFor="feedname">Name :</label>
                                            <input type="text" name="feedname" id="feedname" placeholder="Enter your name"  onChange={handlechange} value={formobject.feedname}/>
                                            <label htmlFor="location">Location :</label>
                                            <input type="text" name="location" id="location" placeholder="City,Country"  onChange={handlechange} value={formobject.location}/>
                                            <label htmlFor="feed">Feed :</label>
                                            <textarea name="feed" id="feed" cols="30" rows="5" placeholder="Enter your valuable feedback !"  onChange={handlechange} value={formobject.feed}></textarea>
                                            <label htmlFor="rating">Rate service :</label>
                                            <input type="number" name="rating" id="rating" max="5" onChange={handlechange} value={formobject.rating}/>
                                            
                                            <button className="btn btn-primary mt-4 ms-2" type="submit">Submit</button>
                                            <button className="btn btn-danger mt-4 ms-2" type="reset">Reset</button>
                                        </form>
                                   </div>
                            </div>
                        </div>
                    </div>
                    

            </section>
    </>)
}

export default Testimonials;