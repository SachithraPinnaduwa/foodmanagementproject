import { useParams } from 'react-router-dom';
import foodPreparationData from '../../assets/foodPreparationData.json';

function Foodpreppage() {
    const { id } = useParams();
    const article = foodPreparationData.find(article => article.id === id);

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            color: '#333',
            maxWidth: '800px',
            padding: '20px',
            margin: '50px auto',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            borderRadius: '4px',
        }}>
            <h1 style={{
                textAlign: 'center',
                borderBottom: '2px solid #dee2e6',
                paddingBottom: '0.5rem',
            }}>{article.title}</h1>
            <img src={article.image} alt={article.title} style={{
                height: '300px',
                marginBottom: '20px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%', // Ensure the image is responsive
                objectFit: 'cover',
                borderRadius: '4px',
            }} />

            <h2 style={{ color: '#007bff', marginTop: '1rem' }}>{article.detailPageContent.title1}</h2>
            <p>{article.detailPageContent.des1}</p>

            <h2 style={{ color: '#007bff', marginTop: '1rem' }}>{article.detailPageContent.title2}</h2>
            <p>{article.detailPageContent.des2}</p>

            <h2 style={{ color: '#007bff', marginTop: '1rem' }}>{article.detailPageContent.title3}</h2>
            <p>{article.detailPageContent.des3}</p>

            {article.detailPageContent.title4 && (
                <h2 style={{ color: '#007bff', marginTop: '1rem' }}>{article.detailPageContent.title4}</h2>
            )}
            {article.detailPageContent.benefitsList && (
                <ul style={{
                    listStyleType: 'none',
                    paddingLeft: '0',
                    marginTop: '1rem',
                }}>
                    {article.detailPageContent.benefitsList.map((benefit, index) => (
                        <li key={index} style={{
                            marginBottom: '0.5rem',
                        }}>
                            {benefit}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Foodpreppage;
