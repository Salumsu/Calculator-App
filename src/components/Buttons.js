import { useContext } from "react";
import { Evaluation } from "../contexts/Evaluation";
import { ThemeContext } from "../contexts/ThemeContext";

const Buttons = () => {
  const {
    toggleNButtonsBG,
    toggle,
    equalBG,
    equalShadow,
    buttonBG,
    buttonShadow,
    toggleBG,
    darkText,
    equalText,
  } = useContext(ThemeContext);

  const { addOnDisplay, operatorButton, equal, del, reset } =
    useContext(Evaluation);

  return (
    <div className="buttons" style={{ backgroundColor: toggleNButtonsBG }}>
      <div className="squares">
        <button
          onClick={addOnDisplay}
          value={"7"}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          7
        </button>
        <button
          onClick={addOnDisplay}
          value={"8"}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          8
        </button>
        <button
          onClick={addOnDisplay}
          value={"9"}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          9
        </button>
        <button
          onClick={del}
          value={"DEL"}
          style={{
            backgroundColor: buttonBG,
            boxShadow: `inset -0px -5px ${buttonShadow}`,
            color: "white",
          }}
        >
          DEL
        </button>
        <button
          onClick={addOnDisplay}
          value={"4"}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          4
        </button>
        <button
          onClick={addOnDisplay}
          value={"5"}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          5
        </button>
        <button
          onClick={addOnDisplay}
          value={"6"}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          6
        </button>
        <button
          value={"+"}
          onClick={operatorButton}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          +
        </button>
        <button
          onClick={addOnDisplay}
          value={"1"}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          1
        </button>
        <button
          onClick={addOnDisplay}
          value={"2"}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          2
        </button>
        <button
          onClick={addOnDisplay}
          value={"3"}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          3
        </button>
        <button
          value={"-"}
          onClick={operatorButton}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          -
        </button>
        <button
          value={"."}
          onClick={addOnDisplay}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          .
        </button>
        <button
          onClick={addOnDisplay}
          value={"0"}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          0
        </button>
        <button
          value={"/"}
          onClick={operatorButton}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          /
        </button>
        <button
          value={"x"}
          onClick={operatorButton}
          style={{
            backgroundColor: equalBG,
            boxShadow: `inset -0px -5px ${equalShadow}`,
            color: darkText,
          }}
        >
          x
        </button>
      </div>
      <div className="rectangle">
        <button
          id="reset"
          value={"RESET"}
          onClick={reset}
          style={{
            backgroundColor: buttonBG,
            boxShadow: `inset -0px -5px ${buttonShadow}`,
            color: "white",
          }}
        >
          RESET
        </button>
        <button
          value={"="}
          onClick={equal}
          style={{
            backgroundColor: toggle,
            boxShadow: `inset -0px -5px ${toggleBG}`,
            color: equalText,
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Buttons;
