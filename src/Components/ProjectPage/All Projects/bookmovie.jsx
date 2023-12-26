

function BookMovie(){
    return <>
    
    <section className="top-gap">
            {/* section header */}
            <header className="section-heads container-fluid d-flex flex-column align-items-center py-4">
                            <h1 className="fs-1 ">Project - 2</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                </header>


                {/* section starts here */}

            <div className="container rounded-2 faq-section mb-5 py-3">

                <div className="row">
                        <div className="col d-flex flex-column projectpage">

                        <header>
                           <h4 className="text-decoration-underline text-head">Project title</h4>
                                <h6>BookMovie (Full-stack)</h6>
                        </header>


            {/* project features */}
                        <section>
                        <h4 className="text-decoration-underline text-head mt-3 text-justify">Project Features</h4>
                                <p>This is the frontend part of bookmyshow backend project with the primary objective of facilitating movie bookings through predetermined slots and corresponding seat types and numbers. Users can effortlessly choose their preferred movie slot and seats based on their requirements, followed by confirming the booking by clicking the 'Book' button. To ensure accuracy, a 'Reset' button is provided to clear the form. In the event that a user attempts to book a movie without specifying crucial details like movie name, time slot, or seat type and count, an alert message will promptly notify them to rectify their selections. Upon successful booking submission with valid information, a POST request is dispatched to record the movie details in a MongoDB Atlas database. Simultaneously, the response received is stored in the local storage. Initially, when no data is present in local storage, the UI will exhibit a message indicating the absence of prior bookings. However, once a booking is made, the relevant data will be dynamically showcased on the UI.</p>
                        </section>

            {/* Tech Stacks used */}

            <section>
                <h5 className="mt-3">a). Tech Stacks</h5>

                <table>
                    <tr>
                        <th>React</th>
                        <td>JavaScript library for building user interfaces.</td>
                    </tr>
                    <tr>
                        <th>JavaScript</th>
                        <td>Programming language for web development.</td>
                    </tr>
                    <tr>
                        <th>CSS</th>
                        <td>Style language for web page design.</td>
                    </tr>
                    <tr>
                        <th>Node.js</th>
                        <td>Server-side JS runtime for scalable applications.</td>
                    </tr>
                    <tr>
                        <th>npm</th>
                        <td>Node Package Manager for installing libraries.</td>
                    </tr>
                    <tr>
                        <th>Express.js</th>
                        <td>Web framework for building APIs and apps.</td>
                    </tr>
                    <tr>
                        <th>MongoDB:</th>
                        <td>Flexible NoSQL database for dynamic data.</td>
                    </tr>
                    <tr>
                        <th>Mongoose</th>
                        <td>ODM for MongoDB, schema and validation.</td>
                    </tr>
                </table>
            </section>

            {/* React Components */}

            <section>
                    <h5 className="mt-3">b). React Components</h5>

                    <ul>
                        <li>Navbar</li>
                        <li>hidepanel</li>
                        <li>BookingPage</li>
                        <li>LastBookingDisplay 
                            <ul type="square">
                                <li>LastBooking</li>
                                <li>NoBookingDisplay</li>
                            </ul>
                        </li>
                        <li>BookMovie
                            <ul type="square">
                                <li>SeatInput</li>
                                <li>Spinner</li>
                            </ul>
                        </li>
                    </ul>
            </section>

            {/* Dependencies */}

            <section>
                <h5 className="mt-3">c). Dependencies</h5>
                <h6 className="text-head">Backend</h6>
                <ul>
                
                                <li><strong>react-icons :</strong>Library providing a comprehensive collection of icons for React components.
                                <ul>
                                    <li>Version:4.10.1</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>react-slick :</strong>Carousel component for React applications, enabling the creation of image sliders.
                                <ul>
                                    <li>Version:18.2.0</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>slick-carousel :</strong>The official package for the Slick carousel component, which enhances the display of image galleries and content sliders in React projects.
                                <ul>
                                    <li>Version:1.8.1</li>
                                </ul>
                                </li>
                            </ul>
<h6 className="text-head">Backend</h6>
                            <ul>
                                <li><strong>cors :</strong>Cross-Origin Resource Sharing middleware to enable secure cross-domain requests.
                                <ul>
                                    <li>Version:2.8.5</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>dotenv :</strong>Loads environment variables from a .env file into your application's runtime.
                                <ul>
                                    <li>Version:16.3.1</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>express :</strong>A fast, unopinionated, minimalist web framework for Node.js to build APIs and apps.
                                <ul>
                                    <li>Version:4.18.2</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>mongoose :</strong>Elegant MongoDB object modeling for Node.js, providing a schema-based solution to interact with MongoDB.
                                <ul>
                                    <li>Version:7.4.1</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>nodemon :</strong>Utility that monitors for changes and automatically restarts the server during development.
                                <ul>
                                    <li>Version:3.0.1</li>
                                </ul>
                                </li>
                            </ul>

            </section>



              {/* data storage */}

                <section>
                                <h5 className="text-head">d). Data Storage / Database</h5>
                                <ul>
                                    <li><strong>Localstorage</strong>The project utilizes the Local Storage API, a browser-based data storage mechanism, to store and retrieve the     flashcard data locally within the user's browser.</li>
                                    <li><strong>MongoDB Compass - Local </strong></li>
                                    <li><strong>MongoDB Atlas - Remote</strong></li>
                                </ul>
                </section>

                {/* api  */}

                <section>
                                <h5 className="text-head">e). api used</h5>
                                <ul>
                                    <li>/api/booking</li>
                                </ul>
                </section>

                {/* request method implemented  */}

                <section>
                                <h5 className="text-head">f). Request method</h5>
                                <ul>
                                    <li>GET</li>
                                    <li>POST</li>
                                </ul>
                </section>

                {/* Controllers  */}

                <section>
                                <h5 className="text-head">g). Controllers</h5>
                                <ul>
                                    <li>getLastBooking</li>
                                    <li>BookedMovie</li>
                                </ul>
                </section>

                 {/* Deployment  */}

                 <section>
                                <h5 className="text-head">h). Deployment</h5>
                                <ul>
                                    <li><strong>Frontend - </strong>Github</li>
                                    <li><strong>
                                        Backend - </strong>render.com</li>
                                </ul>
                </section>

                 {/* Deployment  link*/}

                 <section>
                                <h5 className="text-head">i). Deployment link</h5>
                                <ul>
                                    <li><strong>Frontend - </strong><a className="btn btn-primary" href="https://shubham-code1.github.io/bookshow/" target="_blank" rel="noreferrer">Visit FE</a></li>
                                    <li><strong>
                                        Backend - </strong><a className="btn btn-primary mt-2" href="https://bookmyshowbackend-9p5q.onrender.com/" target="_blank" rel="noreferrer">Visit BE</a></li>
                                </ul>
                </section>



                </div>
                </div>
            </div>


    </section>
    
    </>
};


export default BookMovie;