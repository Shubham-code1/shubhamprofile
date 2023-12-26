
import { useParams } from "react-router";
import FlashCardPage from "./All Projects/flashcardPage";
import EcommerceApp from "./All Projects/ecommApp";
import BookMovie from "./All Projects/bookmovie";

function ProjectDetailMain(){

    const {projectName} = useParams();

    const projectComponents = {
        flashcard:FlashCardPage,
        bookmovie:BookMovie,
        ecommapp:EcommerceApp,
    }

    const ProjectComponent = projectComponents[projectName]

    return(<>
            {ProjectComponent && <ProjectComponent/>}
         
    </>)
}

export default ProjectDetailMain;