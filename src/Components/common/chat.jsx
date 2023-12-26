
// import { useState } from "react";
// import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
// import io from 'socket.io-client';


function ChatMe(){

    // const [chat,setChat] = useState(null);
    // const [inputValue,setInputValue] = useState("");

    // const closeChat = () =>{
    //     setChat(false);
    // }

   
    


    return(<>
         
    
            {/* chat logo */}

        
             {/* <div className="chat-position chat-bg p-3 rounded-circle" >

            <span className="position-absolute cross"><IoMdClose className="text-danger"/></span>

                <IoChatbubbleEllipsesSharp className="fs-2 text-white"/>

            </div>  */}
           


            {/* chat box */}


            <div className="chat-position chat-bg p-1 rounded-2 " >

                <span className="position-absolute cross fw-bold fs-4"><IoMdClose className="text-danger"/></span>

                {/* chatting section */}
                <div className="d-flex flex-column overflow-auto ">
                    
                        {/* user message */}

                        <div className="border w-75 align-self-end my-2 rounded-2 p-2 d-flex flex-column">

                            <h6 className="text-danger fs-6 m-0 ">Hello How Are you ?</h6>
                            
                            <p className="time-chat m-0 align-self-end">12:19 Pm</p>
                        </div>


                            {/* server message */}
                            
                        <div className="border w-75 align-self-start my-2 p-2 rounded-2 d-flex flex-column">

                            <h6 className="text-white fs-6 m-0 ">I am fine ! How about you ?</h6>
                            <p className="align-self-end m-0 p-0 time-chat">12:25 Pm</p>

                        </div>

                </div>


                    {/* message input section  */}
                <div className="sendMessage d-flex border-top border-secondary mt-3 pt-1 " >

                    <input 
                    type="text"
                    // value={inputValue}
                    placeholder="Enter Query here"
                    // onChange={(e)=>{setInputValue(e.target.value)}} 
                    className="p-2"
                    />

                    <button className="btn btn-primary"><span><IoIosSend /></span></button>

                </div>
            </div> 

    </>)
};

export default ChatMe;