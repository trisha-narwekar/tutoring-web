import '../pages/Home.css';
import React from 'react';
import '../pages/Navbar.css';

function Home() {
  return (
    <div>
    <div className="navbar1"></div>
    <div className="bar">
      <img src={require('../media/brain.png')} className= "piccont_home"></img>
    </div>
    <div className="bar2"></div>
    <h1 className="slogan1">learn</h1>
    <h1 className="slogan2">smarter</h1>
    <div className="aboutus_section">
      <h1>Vincent Lucas, who goes by Vince, is an international graduate student born and raised on the beautiful island of Curaçao. He graduated from the University of Tampa with a Bachelor of Arts Degree in Applied Sociology and a minor in Sustainability. He is currently pursuing his Master of Science in Instructional Design and Technology at his alma mater. He is a multilingual, with the ability to speak 4 languages, English, Spanish, Dutch, and the native language from Curaçao, which is called Papiamentu.
          Currently employed at the Office of Diversity, Equity, and Inclusion at the University of Tampa where he manages programs that provide inclusive training and organizes events that raise awareness on the issues minorities face on campus. Previously, he worked as a Research Support Specialist for the Scientific Training in Addiction Research Techniques (START) program at the University of South Florida under the guidance of Dr. Micah Johnson, where he assisted Dr. Johnson with the curriculum of the program that aims to instruct and mentor under-represented scholars in the addiction research field.
          Lastly, he is a member of Phi Theta Kappa Honors Society, Future Business Leaders of America, and Sigma Lambda Beta International Fraternity, Inc.</h1>
    </div>
    </div>
  );
}

export default Home;