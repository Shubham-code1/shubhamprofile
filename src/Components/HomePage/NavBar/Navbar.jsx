import '../../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';


function NavBar(){

      return (<>
            
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark  py-3 fixed-top" id="myNav">
                        <div className="container-fluid">
                              <Link to="/" className="navbar-brand fs-3">UI Developer !</Link>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                              </button>
                              
                              <div className="collapse navbar-collapse " id="mynavbar" >
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                          <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                          <a className="nav-link" href="#project">Projects</a>
                                        </li>
                                        <li className="nav-item">
                                          <a className="nav-link" href="#skill">Skills</a>
                                        </li>
                                        <li className="nav-item">
                                          <a className="nav-link" href="#services">Service</a>
                                        </li>
                                        <li className="nav-item">
                                          <a className="nav-link" href="#testimonial">Testimonial</a>
                                        </li>
                                        <li className="nav-item">
                                          <a className="nav-link" href="#contact">Contact</a>
                                        </li>
                                    </ul>

                                    <form className="d-flex">
                                        <input className="form-control me-2" type="text" placeholder="Search"/>
                                        <button className="btn btn-primary" type="button">Search</button>
                                    </form>
                              </div>
                      </div>
              </nav>
       </header>
    </>)
};


export default NavBar;

