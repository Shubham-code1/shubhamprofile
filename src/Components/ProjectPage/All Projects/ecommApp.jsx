

function EcommerceApp(){
    return (<>
    <section className="top-gap">

        {/* section head */}
    <header className="section-heads container-fluid d-flex flex-column align-items-center py-4">
                            <h1 className="fs-1 ">Project - 3</h1>
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
                                        <h6>Ecommerce App (frontend)</h6>
                                </header>

                        {/* project features */}
                        <section>
                        <h4 className="text-decoration-underline text-head mt-3 text-justify">Project overview</h4>
                                <p>This webapp is an interactive and visually appealing creation, built using HTML, CSS, JavaScript, Bootstrap, and jQuery. frontend ecommerce project includes three HTML pages: a home page, a product description details page, and a cart page that displays items and performs pricing calculations. Each page is fully responsive, catering to all devices. The project utilizes JavaScript, jQuery, HTML, CSS, and Bootstrap to enhance user experience, focusing on an intuitive interface. Users can navigate through product categories in the NavBar, view product details, and add items to their cart for future purchases. Additionally, a wishlist feature has been incorporated for user convenience, albeit it operates only on the UI and doesn't affect the backend. Users can also remove items from their cart. It's important to note that this project is entirely frontend-focused, with no backend implementation. LocalStorage has been used for data storage purposes.</p>
                        </section>

                    {/* technologies used */}

                        <section>
                                <h5 className="mt-3">a). Tech Stacks</h5>

                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS</li>
                                    <li>Javascript [ES6]</li>
                                    <li>Bootstrap</li>
                                    <li>Jquery</li>
                                </ul>
                        </section>

                        {/* folder structure */}
 
            <section>
                <h5 className="mt-3">b). Folder structure</h5>

                <table>
                    <tr>
                        <th>index.html</th>
                        <td>This is the main HTML file that serves as the entry point of the application.</td>
                    </tr>
                    <tr>
                        <th>css/style.css</th>
                        <td>Contains the styles for the entire project.</td>
                    </tr>
                    <tr>
                        <th>css/responsive.css</th>
                        <td>Contains the responsive styles for the entire project.</td>
                    </tr>
                    <tr>
                        <th>assets/</th>
                        <td>This folder houses all the images used in the project.</td>
                    </tr>
                    <tr>
                        <th>js/index.js</th>
                        <td>Contains the JavaScript code for the project.</td>
                    </tr>
                    <tr>
                        <th>js/jquery.js</th>
                        <td>Contains the Jquery code for the project.</td>
                    </tr>
                    <tr>
                        <th>static/</th>
                        <td>This folder contains static HTML files for each section of the webpage.</td>
                    </tr>
                    <tr>
                        <th>cartItemsDisplay.html</th>
                        <td>Contains the Items added to the cart </td>
                    </tr>
                    <tr>
                        <th>productDisplay.html</th>
                        <td>Contains the Individual description of the selected products.</td>
                    </tr>
                </table>
            </section>

{/* Project features */}

            <section>
                    <h5 className="mt-3">c). Project features</h5>

                    <h6 className="text-head">Home Page</h6>

                    <h6 className="text-head">Navbar Effect</h6>

                    <p>HomePage Navbar initially appears transparent but gains a gradient effect upon scrolling for a better user experience. It comprises five sections, each linked to a specific section on the homepage for easy navigation. Users can input any alphabet in the search bar to scroll directly to the products section. Additionally, the navbar includes a cart logo that opens a new window displaying all items in the cart. It also features a user logo, although its functionality is not yet implemented.
</p>

<h6 className="text-head">Navbar categories</h6>

<p>The navbar features a category section with three dropdowns containing categorized product names. Upon the initial page load, the category section displays a default list of products. Users can click on different categories in the navbar dropdown to view products specific to each category. Clicking a category refreshes the homepage's category section, displaying products belonging to the selected category, replacing the previously loaded products.</p>

<h6 className="text-head">HomePage Products category</h6>

<p>Each product in the homepage's category section includes a name, description, rating, price, discount information, and an image. Users can wishlist items by clicking a heart-shaped icon in the top-right corner; this feature is purely visual with no backend functionality. Clicking the "Buy Now" button opens a new window displaying the complete description of the selected product.</p>

<h6 className="text-head">HomePage chat </h6>

<p>The homepage features a chat section fixed at the bottom right corner, equipped with close button. On initial render of page no chat section will be appear on the page just to have the good user experience. Upon scrolling, it appears in the specified location within the viewport. Users can close the chat using the close button, after which it remains hidden until the page is reloaded.</p>

<h6 className="text-head">Homepage others</h6>

<p>The homepage includes additional static sections:</p>
<ul>
    <li><strong>Featured Products :</strong>Showcasing highlighted products.</li>
    <li><strong>Blogs :</strong>Featuring various blog entries.</li>
    <li><strong>Testimonials :</strong>Displaying feedback from different users.</li>
    <li><strong>Footer :</strong>Providing supplementary service-related details.</li>
</ul>

<h5 className="mt-3">ProductDisplayPage</h5>

<p>The product's detailed description opens in a new window after clicking the "Buy Now" button on the homepage. This page contains two buttons: "Add to Cart" and "Buy Now".</p>

<ul>
    <li><strong>Add to Cart Button:</strong>Clicking adds the item to the cart. A confirmation prompt appears, and upon user approval, the item is successfully added. It also updates the total items in cart. which can be seen on navbar cart icon.</li>

    <li><strong>Buy Now Button:</strong>Opens a new window listing items added to the cart. Note that items must be added to the cart before they appear in this window. If   the "Buy Now" button is clicked directly without adding items to the cart, the new window displays previously added cart items. The navbar on this page is for user experience and lacks functionality.</li>
</ul>


<h5 className="mt-3">cartItemsDisplay</h5>

<p>The cart page displays all items in the cart with limited details like name, price, offer, old price, and images. Each item features a "Remove" button allowing users to delete individual items from the cart. Clicking the "Remove" button opens a new window reflecting the updated cart without the deleted item. Additionally, the page includes a pricing calculation section that is currently non-functional. This page is accessible by clicking the "Buy Now" button in the product display page and the cart icon in the homepage's navbar.</p>


{/* storage */}

<h5 className="mt-3">d). storage</h5>
<p>Local storage has been used for storing the products which has been added to the cart. This technology allows data to persist in the user's browser, enabling seamless retrieval and display of added items whenever the cart page is accessed.</p>

{/* responsiveness */}

<h5 className="mt-3">e). responsiveness</h5>

<p> In terms of responsiveness, the project excels. The design adapts gracefully to various screen sizes and devices, providing an optimal viewing experience. This ensures that users can engage with the content effortlessly, regardless of the platform they are using.</p>


{/* error handling */}

<h5 className="mt-3">f). Error handling </h5>
<p>Error handling in this project encompasses various scenarios. I have ensured that when retrieving products from local storage, I verify the existence of data to prevent issues with empty or unavailable carts. Additionally, I have implemented checks to guarantee the proper functioning of cart actions like adding or removing items, displaying user-friendly notifications.I have employed try-catch blocks and error handling functions to manage unexpected errors, ensuring a smooth user experience even during network failures or unexpected behavior.</p>


                
            </section>




    {/* Deployment  link*/}

    <section>
                                <h5 className="text-head">g). Deployment link</h5>
                                <ul>
                                    <li><strong>Frontend - </strong><a className="btn btn-primary" href="https://statuesque-frangollo-264c49.netlify.app/#category" target="_blank" rel="noreferrer">Visit</a></li>
                                </ul>
                </section>






                        </div>
                    </div>
                </div>


    </section>
    </>)
};

export default EcommerceApp;



