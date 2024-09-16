// Import css and any necessary images that will be used on this page
import './Resume.css';
import ResumePDF from '../../assets/images/resume/Resume.pdf';

function Resume() {
    return (
        <div id='container'>
            <div id=''>
                <p>Looking for a copy of my resume? Download it by clicking the below link!</p>
                <p><a href={ResumePDF} download>Download Me!</a></p>
            </div>
        </div>
    );
};

export default Resume