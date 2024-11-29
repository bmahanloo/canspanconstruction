import "./HomePage.css";

import northvan from "../../assets/NorthVan.jpg";

const HomePage: React.FC = () => {
  return (
    <div>
      <img src={northvan} className="home-page" />
    </div>
  );
};

export default HomePage;
