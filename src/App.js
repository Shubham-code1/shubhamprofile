
import './App.css';
import './responsive.css';
import NavBar from './Components/HomePage/NavBar/Navbar';
import HomePage from './Components/HomePage/homepage';
import MainProjectPage from './Components/ProjectPage/MainProjectPage';
import ProjectDetailMain from './Components/ProjectPage/projectDetailMain';
import AdminPage from './Components/admin/adminPage';
import Certificates from './Components/certificates/certifications';
// import ChatMe from './Components/common/chat';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes,Route } from 'react-router';
import ExperienceDetail from './Components/ExperiencePage/experienceDetail';

function App() {

  return (
    <div className="App">
          <NavBar/>

          <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/projects" element={<MainProjectPage/>}/>
                <Route path="/projects/:projectName" element={<ProjectDetailMain/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/certificates" element={<Certificates/>}/>
                <Route path="/experiences" element={<ExperienceDetail/>}/>
          </Routes>


{/* left for future imporovement  */}
          {/* <ChatMe/> */}
         
    </div>
  );
}



export default App; 




