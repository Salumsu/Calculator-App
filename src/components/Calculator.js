import { useContext } from "react";
import { Evaluation } from "../contexts/Evaluation";
import { ThemeContext } from "../contexts/ThemeContext";
import Buttons from "./Buttons";
import Header from "./Header";

const Calculator = () => {
  const { outputBG, outputText } = useContext(ThemeContext);
  const { onDisplay } = useContext(Evaluation);
  return (
    <div className="calculator">
      <Header />
      <div className="output" style={{ backgroundColor: outputBG }}>
        <h1 style={{ color: outputText }}>{onDisplay}</h1>
      </div>
      <Buttons />
    </div>
  );
};

export default Calculator;
