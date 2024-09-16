// Import css and any necessary images that will be used on this page
import './AboutHer.css';
// import bunz from '../../assets/images/me/bunz.jpg';
import AIME from '../../assets/images/me/Me-AI.jpg';

function AboutHer() {
    return (
        <div id='container'>
          <p>
            <h1>A few words to say about myself even though I actually don't like talking about myself.</h1>
          </p>
          <div id='container-2'>
          <img src={AIME} width="300px" id='image' /><br></br>
          </div>
        </div>
    );
};

export default AboutHer