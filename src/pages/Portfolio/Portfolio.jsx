// Import css and any necessary images that will be used on this page
import './Portfolio.css';
import Project from "../../components/Project/Project";
import project from "../../assets/images/projects/UnderConstruction.png";
import EPT from "../../assets/images/projects/completed/EPT.png";
import Outlet from "../../assets/images/projects/completed/Project1_outlet.png";
import Blog from "../../assets/images/projects/completed/Blog.png";
import NoteTaker from "../../assets/images/projects/completed/NoteTakerLandingPage.png";
import Regex from "../../assets/images/projects/completed/Regex.png";

function Portfolio() {
    return (
        <div>
            <div id="projects" className="album py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <Project image={EPT} description="Payroll tracker for company wide employees" href="https://0-sunny-0.github.io/Employee-Payroll-Tracker/"/>
                        </div>
                        <div className="col">
                            <Project image={Outlet} description="OUTlet, the perfect place to find a new event to attend in your area." href="https://fsfgroup8.github.io/OUTlets/"/>
                        </div>
                        <div className="col">
                            <Project image={Blog} description="Blog weebsite for the gal that might just have something to say." href="https://0-sunny-0.github.io/Bunz-the-Blogger/"/>
                        </div>
                        <div className="col">
                            <Project image={NoteTaker} description="Note taker app to keep track of daily goals/reminders " href="https://notetaker-94h0.onrender.com/"/>
                        </div>
                        <div className="col">
                            <Project image={Regex} description="Regex Explanation: Email " href="https://gist.github.com/0-Sunny-0/1aba10e81572163dfc2e05fcb10f8f68"/>
                        </div>
                        <div className="col">
                            <Project image={project} description="Coming soon" href=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio