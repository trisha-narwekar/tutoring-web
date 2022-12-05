import '../pages/Home.css';
import React from 'react';
import '../pages/Navbar.css';

function Home() {
  return (
    <div>
    <div className="navbar1">
    </div>
    <div className="bar">
    <img src={require('../media/logo.png')} className="logo"></img>
      <img src={require('../media/brain.png')} className= "piccont_home"></img>
    </div>
    <div className="bar2"></div>
    <h1 className="slogan1">learn</h1>
    <h1 className="slogan2">smarter</h1>
    <div className="aboutus_section">
      <h1 className="our_tutors">Our Tutors</h1>
    <img src={require('../media/vincent.jpeg')} className="vincent_pic"></img>
    <div className="vincent_text_box">
      <h1 className="vincent_text">Vincent Lucas, who goes by Vince, is an international graduate student born and raised on the beautiful island of Curaçao. He graduated from the University of Tampa with a Bachelor of Arts Degree in Applied Sociology and a minor in Sustainability. He is currently pursuing his Master of Science in Instructional Design and Technology at his alma mater. He is a multilingual, with the ability to speak 4 languages, English, Spanish, Dutch, and the native language from Curaçao, which is called Papiamentu.
          </h1>
      </div>
      <img src={require('../media/gabbie.jpeg')} className="gabbie_pic"></img>
      <div className="gabbie_text_box">
      <h1 className="gabbie_text">Vincent Lucas, who goes by Vince, is an international graduate student born and raised on the beautiful island of Curaçao. He graduated from the University of Tampa with a Bachelor of Arts Degree in Applied Sociology and a minor in Sustainability. He is currently pursuing his Master of Science in Instructional Design and Technology at his alma mater. He is a multilingual, with the ability to speak 4 languages, English, Spanish, Dutch, and the native language from Curaçao, which is called Papiamentu.
          </h1>
      </div>
    </div>
    </div>
  );
}

export default Home;