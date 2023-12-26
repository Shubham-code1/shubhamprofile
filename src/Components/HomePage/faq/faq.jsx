


function Faq(){


    return(<>
            <section id="faq" className="top-gap">
                {/* section header */}
             

                <header className="section-heads container-fluid d-flex flex-column align-items-center pb-5">
                            <h1 className="fs-1 ">FAQ's</h1>
                            <div className="pendulum">
                                <span className="to-fro rounded-circle"></span>
                            </div>
                </header>

                {/* section starts here */}

                <div className="container rounded-2 faq-section p-sm-5">


{/* faq starts bootstrap */}
<div class="accordion" id="accordionExample">

    {/* first accordion */}
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong className="me-2">Q. </strong>  What is the purpose of this profile page?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong className="me-2">Answer:</strong> This profile page serves as a comprehensive platform to showcase my professional journey, skills, and projects. It's a hub where you can explore my experiences, learn about my expertise, and get in touch for collaborations or discussions related to web development and design.
      </div>
    </div>
  </div>

  {/* second accordion */}
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong className="me-2">Q. </strong>  What can I find on this profile page?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong className="me-2">Answer:</strong> On this profile, you'll find my bio, detailed resume, a portfolio showcasing various projects I've worked on, contact information for reaching out to me, and links to my social media profiles. It's a one-stop destination to gain insights into my professional background and the work I've done.
      </div>
    </div>
  </div>

  {/* third accordion */}
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong className="me-2">Q. </strong>  How can I connect or get in touch?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong className="me-2">Answer:</strong> You can connect with me by using the contact form provided on this page. Alternatively, you can reach out to me directly via email at <a href="emailTo:shubham.email01@gmail.com">shubham.email01@gmail.com</a>. Additionally, feel free to connect with me on LinkedIn <a href="https://www.linkedin.com/in/shubham-kumar-a065a3263/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/shubham-kumar-a065a3263/</a> for professional inquiries or collaborations.
      </div>
    </div>
  </div>
  
{/* fourth accordion */}
<div class="accordion-item">
  <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    <strong className="me-2">Q. </strong>  Can I collaborate or hire you for projects?
    </button>
  </h2>
  <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    <strong className="me-2">Answer:</strong> Absolutely! I'm open to collaboration opportunities, freelance projects, and full-time positions in the realm of web development and design. If you have a project in mind or want to discuss potential collaborations, please reach out to me through the contact form or email provided.
    </div>
  </div>
</div>

{/* Fifth accordion */}
<div class="accordion-item">
  <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
    <strong className="me-2">Q. </strong>  Is there a way to stay updated on your work or new projects?
    </button>
  </h2>
  <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <strong className="me-2">Answer:</strong> Yes, you can stay updated on my latest projects and professional insights by following my blog, accessible via the link provided on this page. Additionally, you can connect with me on social media platforms like Twitter and LinkedIn, where I regularly share updates on my work and industry-related topics.
    </div>
  </div>
</div>
{/* fifth accordion ends */}
</div>
{/* faq ends bootstrap */}




                </div>
            </section>

    </>)
}

export default Faq;