// Import css and any necessary images that will be used on this page
import './Home.css';
import bunz from '../../assets/images/me/bunz.jpg';

function Home() {
    return (
        <div id='container'>
        <img src={bunz} width="300px" id='image' /><br></br>
        <br></br>
          <p>
            <h1>Hiya and welcome to my side of the digital world!<br></br>
                I'm so happy to have you here.</h1>
            <h2>Feel free to click the links in my navigation to get to know the girl you just landed on</h2>
          </p>
        </div>
    );
};

export default Home