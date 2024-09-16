// Import css and any necessary images that will be used on this page
import './Resume.css';
import ResumePDF from '../../assets/images/resume/Resume.pdf';

function Resume() {
    return (
        <div id='container'>
            <div id='paragraph'>
                <p>Thank you for visiting my little side of the digital world. I'm glad you took a moment to visit. If you'd like to view my resume, please feel free to click the below link and download it!</p>
                <p><a href={ResumePDF} download>Sunny-0's Resume!</a></p>
            </div>
        </div>
    );
};

export default Resume