import React from 'react'
import '../componentsCss/About.css'
import { Link } from 'react-router-dom'
import donation from '../assets/home/donation.jpg'
function CommunityAction() {
  return (
    <section className="main">
      <h1>Community Action</h1>
      <p>See how you can take part in local food preservation events and initiatives.</p>

      <div className='first'>
        <div className='text'>
        <h2>Food Preperation</h2>
        <p>Preserve food better by reading our short articles on food preperation <Link to="/food-preparation">here</Link>
        </p>
        <div style={{paddingTop:"5rem"}}>
        <h2>Food Distribution</h2>
        <p>Preserve food better by reading our short articles on food distribution <Link to="/food-distribution">here</Link>

        </p>
        </div>
        </div>
        
        <div>
            <img src={donation} alt="food preservation" height={300}/>
        </div>
      </div>
    </section>
  )
}

export default CommunityAction