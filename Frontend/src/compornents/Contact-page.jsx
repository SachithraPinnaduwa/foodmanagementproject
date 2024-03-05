import React from 'react';
import ContactCard from './Contactcard'; 
import chamath from '../assets/team/chamath.jpg';
import dilmi from '../assets/team/dilmi.jpg';
import sachithra from '../assets/team/sachithra.jpg';
import savi from '../assets/team/savi.jpg';
function Contact() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr', // Two columns
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px', // Space between cards
      padding: '50px', // Padding around the grid
      minHeight: '100vh', // Full height
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    }}>
   
      
      <ContactCard
        name="Savi saluwadana"
        linkedInUrl="https://www.linkedin.com/in/tharindu-lakshan-9b8b3a1b2/"
        email="savisaluwadana@gmail.com" 
        description="I am the team leader of this project who helped to develop the website by guiding the team members."
        image={savi}
      />
      <ContactCard
        name="Sachithra Pinnaduwa"
        linkedInUrl="https://www.linkedin.com/in/sachithra-pinnaduwa-566703242/"
        email="sachithrapinnaduwa@gmail.com"
        description="I am an undergraduate of IIT university who is interested in web development and Machine Learning."
        image={sachithra}
      />
      <ContactCard
        name="Weerathantrige Dilmi Rangana"
        linkedInUrl="http://www.linkedin.com/in/dilmi-rangana-128aa8263"
        email="dilmirangana1234@gmail.com" 
        description="I am an undergraduate of IIT university   who is currently following the Machine Learning module and I am intrested in implenting machine learning models in real world problems."
        image={dilmi} 
      />
      <ContactCard
        name="Munagamage Chamath Anjula Munasinghe"
        linkedInUrl="http://www.linkedin.com/in/chamath-munasinghe-2602a7258"
        email="chamathanjula2@gmail.com" 
        description="I am an undergraduate at the University of Westminster, affiliated with IIT, Sri Lanka. I am passionate about mobile development, web development (full stack), and software engineering."
        image={chamath}
      />
      
    </div>
  );
}

export default Contact;
