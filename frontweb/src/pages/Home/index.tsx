
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    
    <div className="home-container">
      <h1>Desafio Github API</h1>
      <Link to ="/gitsearch">
      <p>Bootcamp Spring React - DevSuperior</p>
      <button className="btn btn-primary btn">Começar</button>
      </Link>
    </div>
    
  );
};

export default Home;
