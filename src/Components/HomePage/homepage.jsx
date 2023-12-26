
import BannerOne from "./banner/bannerone";
import Project from "./projects/project";
import Skills from "./skills/skills";
import Education from "./Education/education";
import Experience from "./Experience/experience";
import Service from "./services/services";
import Testimonials from "./testimonials/testimonials";
import Faq from "./faq/faq";
import Contact from "./contactus/contact";
import Footer from "./footer/footer";


function HomePage(){
    return (<>

          <BannerOne/>
          <Project/>
          <Skills/>
          <Education/>
          <Experience/>
          <Service/>
          <Testimonials/>
          <Faq/>
          <Contact/>
          <Footer/>
    </>)
}

export default HomePage;