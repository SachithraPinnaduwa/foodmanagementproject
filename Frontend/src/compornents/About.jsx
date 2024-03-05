import React from 'react'
import '../componentsCss/About.css'
import  mission from '../assets/home/mission.jpg'
function About() {
  return (
    <section className="main">
      <h1>About Our Mission</h1>
      <p>Learn about our efforts to educate and provide resources for food preservation to combat hunger.</p>

      <div className='first'>
        <div className='text'>
        <h2>The Food Preservation Movement</h2>
        <p>At Food managemt system , our mission is not just a statement; it's a commitment to redefining the way we interact with food – from production to consumption. We are on a journey to create a positive ripple effect in the world, and our focus lies on four key pillars:.</p>
        <ol
        style={{paddingLeft:"2rem"}}
        >
          <li>Food Preservation</li>
          <li>Food Preparation</li>
          <li>Food Distribution</li>
          <li>Community Action</li>
        </ol>
        </div>
        <div>
            <img src={mission} alt="food preservation" height={400} />
        </div>
      </div>
    </section>
  )
}

export default About