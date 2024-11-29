import { Route, Routes } from "react-router-dom";

import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
