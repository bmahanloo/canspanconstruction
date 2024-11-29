import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomePage></HomePage>
    </div>
  )
}

export default App;