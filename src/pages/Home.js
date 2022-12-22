import '../pages/Home.css';
import React from 'react';
import '../pages/Navbar.css';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar />
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
      <h1 className="our_tutors">Our Team</h1>
      <div class="container-block container">
  <div class="responsive-container-block teamcard-container">
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
          <img src={require('../media/vincent.jpeg')} className="team-img"></img>
        <div class="team-card-content">
          <p class="text-blk name">Vincent Lucas
          </p>
          <p class="text-blk position">Vincent Lucas, who goes by Vince, is an international graduate student born and raised on the island of Curaçao. He graduated from the University of Tampa with a Bachelor of Arts Degree in Applied Sociology and a minor in Sustainability. He is currently pursuing his Master of Science in Instructional Design and Technology at his alma mater. He is a multilingual, with the ability to speak English, Spanish, Dutch, and the native language from Curaçao, which is called Papiamentu.
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
          <img src={require('../media/gabbie.jpeg')} className="team-img"></img>
        <div class="team-card-content">
          <p class="text-blk name">Gabrielle Brown
          </p>
          <p class="text-blk position">Gabrielle Brown is the owner and lead tutor of Gab's A+ Tutoring. She has been a tutor for 4 years and will be celebrating her 5th year next November. She has worked with a variety of children 2-20 in the educational field. She has a variety of experience working with special needs students, middle school challenges, and highschool AP and language classes. If you're looking for versatility, she is the woman for the job.
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
          <img src={require('../media/admin.jpeg')} className="team-img"></img>
        <div class="team-card-content">
          <p class="text-blk name">Giselly
          </p>
          <p class="text-blk position">Gisselly is our internal organization wizard. She is known for her strong communication, timely feedback and scheduling adjustments. If you're looking to book with us, please reach out to her as soon as possible.
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>

   
    </div>
    </div>
  );
}

export default Home;