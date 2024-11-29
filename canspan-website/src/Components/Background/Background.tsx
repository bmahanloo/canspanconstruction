import './Background.css';
import mordhau from '../../assets/mordhau.jpg';
import halfsword from '../../assets/halfsword.jpg';

interface BackgroundProps {
  heroCount: number;
}

const Background: React.FC<BackgroundProps> = ({ heroCount }) => {
  if (heroCount === 0) {
    return <img src={mordhau} className='background' alt="" />;
  }
  else if(heroCount === 1) {
    return <img src={halfsword} className='background' alt="" />;
  }
  return null;
}

export default Background;