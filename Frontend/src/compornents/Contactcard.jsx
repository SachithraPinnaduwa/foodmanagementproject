import React from 'react';

function ContactCard({ name, linkedInUrl, email, description,image }) {
  return (
    <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent card background
        color: 'white', // Text color for readability
        padding: '20px',
        borderRadius: '10px', // Rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Shadow for depth
        textAlign: 'center', // Center align text
        fontFamily: 'Arial, sans-serif',
        
    }}>
        <img src={image} alt={name} style={{
            width: '200px', // Set the width of the image
            height: '200px', // Set the height of the image
            borderRadius: '50%', // Make the image circular
            objectFit: 'cover', // Cover the area with the image
            marginBottom: '20px', // Add space between the image and text
        }} />
      <h2>{name}</h2>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0d6efd', textDecoration: 'none', display: 'block', margin: '10px 0' }}>LinkedIn</a>
      <a href={`mailto:${email}`} style={{ color: '#0d6efd', textDecoration: 'none', display: 'block', margin: '10px 0' }}>Email</a>
      <p>{description}</p>
    </div>
  );
}

export default ContactCard;
