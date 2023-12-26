

function FlashCardPage(){
    return (<>
        <section className="top-gap">

              {/* section header */}

              <header className="section-heads container-fluid d-flex flex-column align-items-center py-4">
                            <h1 className="fs-1 ">Project - 1</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                </header>

                {/* section starts here */}

                <div className="container rounded-2 faq-section mb-5 py-3">

                    <div className="row">
                        <div className="col d-flex flex-column projectpage">

                           <header>
                           <h4 className="text-decoration-underline">Project title</h4>
                                <h6>Flashcard Generator (Frontend)</h6>
                           </header>
                           
                            <section className="mt-3">
                                <h4 className="text-decoration-underline">Project Features</h4>
                                
                                {/* Navbar */}

                                <h5 className="mt-3">a). Navbar</h5>
                                <p>The application features a navigation bar with two links:</p>
                                <ul>
                                    <li><strong>Create Card: </strong>Allows users to create new flashcards.</li>
                                    <li><strong>My Flashcards: </strong>Navigates to a page displaying all the created flashcards.
                                    </li>
                                </ul>

                                {/* flashcard creation */}
                                <h5>b). Flashcard Creation</h5>

                                <ul>
                                    <li><strong>Group Section: </strong>Users are required to fill out the primary group details, including group name and description.</li>
                                    <li><strong>Term Card Section: </strong>Allows users to dynamically add term cards to the group.</li>
                                    <li><strong>Optional Photos: </strong>Users can optionally add photos to the group and term cards.</li>
                                    <li><strong>Alert Message : </strong>An alert message will be shown for successfull card creation.</li>
                                </ul>

                                {/* Validation */}

                                <h5>c). Validation</h5>
                                <p>The flashcard creation process includes validation rules to ensure data integrity:</p>
                                   <ul>
                                        <li>Group name and term name must have a minimum of 5 characters.</li>
                                        <li>Group description should be between 50 and 160 characters.</li>
                                        <li>Term description should be between 50 and 400 characters.
                                        </li>
                                   </ul>

                                   {/* myflashcard Page */}

                                   <h5>d). My Flashcards Page</h5>
                                   <p>Displays all the created flashcards with their associated group name, description, and number of term cards.</p>

                                   <ul>
                                    <li><strong>View Button: </strong>Navigates to a page showing all the term cards associated with the selected flashcard.</li>
                                    <li><strong>Delete Button: </strong>Allows users to delete the flashcard from the list.</li>
                                    <li><strong>Confirm message: </strong>
                                    After clicking the delete button an confirm box will be pop-up to ensure the user's final desire to delete the particular card.
                                    </li>
                                   </ul>

                                   {/* Show More / Show Less button */}

                                   <h5>e). Show More / Show less button:-</h5>

                                    <ul>
                                        <li>This button is always positioned beneath the top right corner of NavBar</li>
                                        <li>This button will only be present in FlashCards Component.</li>
                                        <li>While scrolling button itself will hide automatically to give a good user experience by avoiding its permanent presence over the card, which can be noticed in mobile view.</li>
                                        <li>This enables the user to show the more or less card, regardless of where the user is on the page.</li>
                                    </ul>

                                    {/* Term Card Page */}

                                    <h5>f). Term Card Page:-</h5>

                                    <ul>
                                        <li>Displays the selected flashcard's group name and description.</li>
                                        <li>Lists all the term cards associated with the flashcard.</li>
                                        <li>Selecting a term card shows its associated photo, name, and description.</li>
                                        <li><strong>Share button: </strong>Opens a modal window for copying the flashcard link.</li>
                                        <li>The modal includes clipboard copying functionality to copy the link.</li>
                                    </ul>

                                    {/* Modal */}

                                    <h5>g). Modal</h5>
                                    <ul>
                                        <li>Share button available in TermCard Page will open a Modal structure containing different buttons with social media icons.</li>
                                        <li> by clicking on buttons it will display a link in input box, this link can be copied to clipboard by clicking the button right to the input box.</li>
                                        <li>An alert message will be displayed after succesfull copy of the link.
                                        </li>
                                    </ul>
                                                            
                            </section>

                            {/* technologies used */}

                            <section>
                            <h5>h). Technologies Used:-</h5>

                            <ul>
                                <li> HTML5 and CSS3: Markup and styling of the application.</li>
                                <li>JavaScript: Programming language used for client-side functionality.</li>
                                <li>React: JavaScript library for building user interfaces.</li>
                                <li>npm: Package manager for installing and managing project dependencies.</li>
                            </ul>
                            
                            </section>      


                {/* dependencies */}
                            <section>
                                <h5>i). Dependencies:-</h5>
                            <p>
                            The following dependencies were used in the project:
                            </p>

                            <ul>
                                <li><strong>Formik :</strong>Library for building forms in React.
                                <ul>
                                    <li>Version:2.4.1</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>React :</strong>JavaScript library for building user interfaces.
                                <ul>
                                    <li>Version:18.2.0</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>React DOM :</strong>Entry point for working with the DOM in React.
                                <ul>
                                    <li>Version:18.2.0</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>React Icons :</strong>Library for using icons in React applications.
                                <ul>
                                    <li>Version:4.9.0</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>React Redux :</strong>Official Redux bindings for React.
                                <ul>
                                    <li>Version:8.0.7</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>React Router :</strong>Library for routing in React applications.
                                <ul>
                                    <li>Version:6.12.1</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>React Router DOM:</strong>DOM bindings for React Router.
                                <ul>
                                    <li>Version:6.12.1</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>Yup:</strong>JavaScript schema builder for value parsing and validation.
                                <ul>
                                    <li>Version:1.2.0</li>
                                </ul>
                                </li>
                            </ul>

                            <ul>
                                <li><strong>"@reduxjs/toolkit"</strong>A comprehensive set of Redux utilities and abstractions for simplified state management.
                                <ul>
                                    <li>Version:1.9.5</li>
                                </ul>
                                </li>
                            </ul>


                            </section>

                           {/* dev dependencies */}

                            <section>
                                <h5>j). Dev dependencies:-</h5>

                            <ul>
                                <li><strong>"@reduxjs/toolkit"</strong>A comprehensive set of Redux utilities and abstractions for simplified state management.
                                <ul>
                                    <li>Version:1.9.5</li>
                                </ul>
                                </li>
                            </ul>
                            </section>

                            {/* React Router components */}

                            <section>
                                <h5>k). React-Router components used</h5>
                                <ul>
                                    <li>Hashrouter</li>
                                    <li>Routes</li>
                                    <li>Route</li>
                                    <li>NavLink</li>
                                </ul>
                            </section>

                             {/* React Router hook used */}

                             <section>
                                <h5>l). React-Router hook used</h5>
                                <ul>
                                    <li>useNavigate</li>
                                </ul>
                            </section>

                             {/* React Redux hook used */}

                             <section>
                                <h5>m). React-Redux hook used</h5>
                                <ul>
                                    <li>useDispatch</li>
                                    <li>useSelector</li>
                                </ul>
                            </section>

                            {/* React hooks used */}

                            <section>
                                <h5>n). React hooks used</h5>
                                <ul>
                                    <li>useState</li>
                                    <li>useEffect</li>
                                </ul>
                            </section>

                            {/* data storage */}

                            <section>
                                <h5>o). LocalStorage API</h5>
                                <ul>
                                    <li>The project utilizes the Local Storage API, a browser-based data storage mechanism, to store and retrieve the     flashcard data locally within the user's browser.</li>
                                </ul>
                            </section>

                            {/* for deployment */}

                              <section>
                                <h5>p). for deployment</h5>
                                <ul>
                                    <li>gh-pages</li>
                                </ul>
                              </section>

                                {/* Deployment  link*/}

    <section>
                                <h5 className="text-head">q). Deployment link</h5>
                                <ul>
                                    <li><strong>Frontend - </strong><a className="btn btn-primary" href="https://shubham-code1.github.io/groupcreate/" target="_blank" rel="noreferrer">Visit</a></li>
                                </ul>
                </section>

                        </div>
                    </div>
                </div>

        </section>
    </>)
};

export default FlashCardPage;