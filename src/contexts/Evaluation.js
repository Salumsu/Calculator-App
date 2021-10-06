import { createContext, useState } from "react";

export const Evaluation = createContext();

const EvaluationProvider = ({ children }) => {
  const [onDisplay, setOnDisplay] = useState("");
  const [onSecondStep, setOnSecondStep] = useState(false);
  const [operator, setOperator] = useState("");

  const [firstNum, setFirstNum] = useState("");

  const addOnDisplay = (e) => {
    setOnDisplay(onDisplay + e.target.value);
  };

  const operatorButton = (e) => {
    if (!onDisplay) return;
    if (onSecondStep) {
      setOnDisplay(eval(`${firstNum} ${operator} ${onDisplay}`));
      switch (e.target.value) {
        case "+":
          setOperator("+");
          setOnSecondStep(false);
          break;
        case "-":
          setOperator("-");
          setOnSecondStep(false);

          break;
        case "x":
          setOperator("*");
          setOnSecondStep(false);

          break;
        case "/":
          setOperator("/");
          setOnSecondStep(false);
          break;

        default:
          break;
      }
    } else {
      switch (e.target.value) {
        case "+":
          setOperator("+");
          setOnSecondStep(true);
          setFirstNum(onDisplay);
          setOnDisplay("");
          break;
        case "-":
          setOperator("-");
          setOnSecondStep(true);
          setFirstNum(onDisplay);
          setOnDisplay("");
          break;
        case "x":
          setOperator("*");
          setOnSecondStep(true);
          setFirstNum(onDisplay);
          setOnDisplay("");
          break;
        case "/":
          setOperator("/");
          setOnSecondStep(true);
          setFirstNum(onDisplay);
          setOnDisplay("");
          break;

        default:
          break;
      }
    }
  };

  const equal = () => {
    if (!onSecondStep) return;
    setOnDisplay(eval(`${firstNum} ${operator} ${onDisplay}`));
    setOperator("");
    setOnSecondStep(false);
  };

  const del = () => {
    setOnDisplay(String(onDisplay).slice(0, -1));
  };

  const reset = () => {
    setOnDisplay("");
    setOnSecondStep(false);
    setOperator("");
    setFirstNum("");
  };

  return (
    <Evaluation.Provider
      value={{ onDisplay, addOnDisplay, operatorButton, equal, del, reset }}
    >
      {children}
    </Evaluation.Provider>
  );
};

export default EvaluationProvider;
