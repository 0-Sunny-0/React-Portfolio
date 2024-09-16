// Import css and any necessary images that will be used on this page
import './Portfolio.css';
import Project from "../../components/Project/Project";
import project from "../../assets/images/projects/UnderConstruction.png";

function Portfolio() {
    return (
        <div>
            <div id="projects" className="album py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <Project image={project} description="Coming Soon" href="https://example.com"/>
                        </div>
                        <div className="col">
                            <Project image={project} description="Coming Soon" href="https://example.com"/>
                        </div>
                        <div className="col">
                            <Project image={project} description="Coming soon" href="https://example.com"/>
                        </div>
                        <div className="col">
                            <Project image={project} description="Coming soon" href="https://example.com"/>
                        </div>
                        <div className="col">
                            <Project image={project} description="Coming soon" href="https://example.com"/>
                        </div>
                        <div className="col">
                            <Project image={project} description="Coming soon" href="https://example.com"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio