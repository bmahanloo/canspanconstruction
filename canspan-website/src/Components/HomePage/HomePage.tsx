import './HomePage.css';
import mordhau from '../../assets/mordhau.jpg';
import halfsword from '../../assets/halfsword.jpg';
import northvan from '../../assets/NorthVan.jpg';


const images = [northvan, mordhau, halfsword];

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <img src={images[0]} className="home-page" alt="home-page" />
    </div>
  );
}

export default HomePage;
