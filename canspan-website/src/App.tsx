import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Background></Background>
    </div>
  )
}

export default App;