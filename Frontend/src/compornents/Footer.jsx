import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
    <p>
      Get to know more about us by visiting our
      <Link to="/contact"> About us page</Link>.
    
    </p>
  </footer>
  )
}

export default Footer