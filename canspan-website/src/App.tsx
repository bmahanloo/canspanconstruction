import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import ContactPage from "./Components/ContactPage/ContactPage";
import AboutPage from "./Components/AboutPage/AboutPage";

const App: React.FC = () => {
  let Component = HomePage;
  console.log(window.location)
  switch(window.location.pathname) {
    case "/":
      Component = HomePage;
      break;
    case "/aboutpage":
      Component = AboutPage;
      break;
    case "/contactpage":
      Component = ContactPage;
      break;
  }
  return (
    <div>
      <Navbar />
      <Component />
    </div>
  )
}

export default App;