import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const heroData = [
    {text1: "test1", text2: "test2"}
  ];

  const [heroCount, setHeroCount] = useState(0);

  return (
    <div>
      <Background heroCount={heroCount} ></Background>
      <Navbar />
    </div>
  )
}

export default App;