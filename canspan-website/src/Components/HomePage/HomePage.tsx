import './Background.css';
import mordhau from '../../assets/mordhau.jpg';
import halfsword from '../../assets/halfsword.jpg';
import northvan from '../../assets/NorthVan.jpg';


const images = [northvan, mordhau, halfsword];

const Background: React.FC = () => {
  return (
    <div className="background-container">
      <img src={images[0]} className="background" alt="Background" />
    </div>
  );
}

export default Background;
