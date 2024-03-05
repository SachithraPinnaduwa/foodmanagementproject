import { Link } from 'react-router-dom';
import '../../componentsCss/Foodprep/Foodprepcard.css';

function Foodprepcard(item) {

  
  
  return (
    <div>
      <div key={item.id} className="card">
      <img className="card-img"src={item.image} alt={item.title}
        />
        <h2>{item.title}</h2>
        <p className='card-description'>{item.description}</p>
          <button className='card-button'> <Link to={`/food-preparation/${item.id}` }className="card-button-link">Learn More</Link></button>
        </div>
    </div>
  );
}

export default Foodprepcard;
