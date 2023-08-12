import styled from "styled-components";
import StartGame from "./components/StartGame";
import Gameplay from "./components/Gameplay";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}
export default App;
