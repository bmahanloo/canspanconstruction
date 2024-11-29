import "./HomePage.css";

import northvan from "../../assets/NorthVan.jpg";

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <img src={northvan} className="home-page" alt="home-page" />
    </div>
  );
};

export default HomePage;
