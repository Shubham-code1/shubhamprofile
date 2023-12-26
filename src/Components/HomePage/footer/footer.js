// import { TiTick } from "react-icons/ti";


function Footer(){
    return (<>
            <footer className="footer top-gap" id="footer">
                <div className="container-fluid border top-gap">
                    {/* heading */}
                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center py-5">
                            <h5 className="text-secondary fs-3 fw-medium" >
                                How was my Profile overall ?
                            </h5>
                                <button className="btn btn-primary mx-3 my-1">Fantastic</button>  
                                <button className="btn btn-info mx-3 my-1">Good</button>  
                                <button className="btn btn-success mx-3 my-1">Average</button>  
                    </div>

<hr className="text-white"/>

                    <div className="row">
                        {/* left side */}
                        <div className="col-sm-6 d-flex px-0">

                            <div className="w-50 text-center py-3">
                                <ul className="p-0 list-unstyled">
                                    <li className="text-secondary fw-bold text-decoration-underline">About Me</li>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Bio</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Contact Info</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Skills</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Experience</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Achievements</li></a>
                            
                                    
                                    
                                    
                                </ul>
                            </div>

                            <div className="w-50 text-center py-3">
                                    <ul className="p-0 list-unstyled">
                                        <li className="text-secondary fw-bold text-decoration-underline">Interests</li>
                                        <a href="#project" className="text-decoration-none"><li className="f-li">Projects</li></a>
                                        <a href="#footer-link" className="text-decoration-none"><li className="f-li">Passsion</li></a>
                                        <a href="#footer-link" className="text-decoration-none"><li className="f-li">Hobbies</li></a>
                                        <a href="#footer-link" className="text-decoration-none"><li className="f-li">Certifications</li></a>
                                        <a href="#footer-link" className="text-decoration-none"><li className="f-li">Publications</li></a>
                            
                                    </ul>
                            </div>
                            

                        </div>
                        {/* right side */}
                        <div className="col-sm-6 d-flex text-center px-0">
                            <div className="w-50 py-3 ">
                                    <ul className="p-0 list-unstyled">
                                    <li className="text-secondary fw-bold text-decoration-underline">Knowledge Base</li>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Favourite Books</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Courses</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Tools & Tech</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Blogs </li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Podcasts</li></a>
                            
                                        </ul>
                            </div>
                            <div className="w-50 text-center py-3">
                                <ul className="p-0 list-unstyled">
                                <li className="text-secondary fw-bold text-decoration-underline">Connect With me</li>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Linkedin</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Github</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Whatsapp</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Instagram</li></a>
                                    <a href="#footer-link" className="text-decoration-none"><li className="f-li">Email</li></a>
                            
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
    </>)
}

export default Footer;