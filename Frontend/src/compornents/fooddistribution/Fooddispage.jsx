import { useParams } from 'react-router-dom';
import foodDistributionData from '../../assets/foodDistributionData.json';

function Fooddispage() {
    const { id } = useParams();
    const article = foodDistributionData.find(article => article.id === id);
    
    return (
        <div className="article-container" style={{
            padding: '20px',
            backgroundColor: '#f8f9fa', // Light grey background
            color: '#333', // Dark text for readability
            fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', // Modern font stack
            maxWidth: '800px', // Max width for readability
            marginLeft: 'auto', // Center the container
            marginRight: 'auto',
            marginTop: '50px',
            borderRadius: '5px', // Slightly rounded corners
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Subtle shadow
        }}>
            <h1 style={{ borderBottom: '2px solid #dee2e6', // Add line below the title
                         paddingBottom: '0.5rem' }}>{article.title}</h1>
            <img src={article.image} alt={article.title} style={{
                height: '300px',
                marginBottom: '20px',
                width: '100%', // Make the image responsive
                objectFit: 'cover', // Ensure the image covers the area
                borderRadius: '5px' // Match the border radius of the container
            }} />

            <h2 style={{ color: '#007bff' }}>{article.detailPageContent.title1}</h2> {/* Blue color for subheadings */}
            <p>{article.detailPageContent.des1}</p>

            <h2 style={{ color: '#007bff' }}>{article.detailPageContent.title2}</h2>
            <p>{article.detailPageContent.des2}</p>

            <h2 style={{ color: '#007bff' }}>{article.detailPageContent.title3}</h2>
            <p>{article.detailPageContent.des3}</p>

            {article.detailPageContent.title4 && (
                <h2 style={{ color: '#007bff' }}>{article.detailPageContent.title4}</h2>
            )}
            {article.detailPageContent.benefitsList && (
                <ul style={{
                    listStyleType: 'none', // No bullet points
                    paddingLeft: '0', // Align text to the left
                    lineHeight: '1.6' // More readable line height
                }}>
                    {article.detailPageContent.benefitsList.map((benefit, index) => (
                        <li key={index} style={{
                            marginBottom: '10px', // Space out list items
                        }}>
                            {benefit}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Fooddispage;
