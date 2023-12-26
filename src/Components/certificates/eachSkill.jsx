import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function EachSKill({value}){



const {rating,years,skill,durationtype,_id} = value;

            const renderStars = (rating)=>{

                let stars = [];
                let maxStars = 5;

                for(let i=1; i<=maxStars; i++){
                    if(i <= rating){
                        stars.push(<FaStar key={i}/>);
                    }else{
                        stars.push(<FaRegStar key={i}/>)
                    }
                }
                return stars;
            }


    return (<>
        <div key={_id} className="d-flex justify-content-between py-1 px-2 border rounded-3 mt-2 ">
            {/* left side */}
            <div className="">
                <h6 className="mb-0 text-head">{skill}</h6>
                <div className="mt-0 text-head">
                    <span>
                        {renderStars(rating)}
                    </span>
                </div>
            </div>

            {/* right side representing years */}
            <div className="">

                <h6 className="text-head">{years} {durationtype}{years > 1 ? "s" : ""} </h6>

            </div>
        </div>
        
    </>)
}

export default EachSKill;