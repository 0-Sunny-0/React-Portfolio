// Import css and any necessary images that will be used on this page
import './AboutHer.css';
import AIME from '../../assets/images/me/Me-AI.jpg';

function AboutHer() {
    return (
        <div id='container'>
          <div id='lilfoot'>
          <p>
            <h1>From a young age, Sunny dreamed of blending creativity with technology, envisioning a future as both a coder and a designer.</h1><br></br>
            <h1>However, life's twists and turns led her down a different path, and her dreams took a backseat. With a newfound determination and a heart full of passion, Sunny is seizing the opportunity to turn those dreams into reality.</h1><br></br>
            <h1>Having spent years utilizing her creative talents for various projects and business ventures, she finally decided to embark on her journey as a coder and designer. She combones a deep love for aesthetics with a keen understanding of technology, crafting designs that are both visually appealing and functionally intuitive. Sunny's work reflects her unique perspective, personality, and dedication to visual excellence, as she embraces every challenge with enthusiasm and resilience.</h1><br></br>
            <h1>Embracing the old mantra of "grabbing life by the horns," Sunny is committed to making the most of every moment. Her story is a testament to the power of perseverance and the belief that it's never to late to chase your dreams. Now, as she steps into the world of web development and design with confidence and excitement, Sunny is ready to make her mark and inspire others to follow their passions, no matter the obstacles.</h1>
          </p>
          <div id='container-2'>
          <img src={AIME} width="300px" id='image' /><br></br>
          </div>
          </div>
        </div>
    );
};

export default AboutHer