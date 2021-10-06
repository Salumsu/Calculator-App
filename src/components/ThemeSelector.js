import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSelector = () => {
  const { toggleNButtonsBG, changeTheme, themeID, toggle, outputText } =
    useContext(ThemeContext);
  return (
    <div className="theme-selector">
      <div className="labels">
        <p style={{ color: outputText }}>1</p>
        <p style={{ color: outputText }}>2</p>
        <p style={{ color: outputText }}>3</p>
      </div>
      <div className="selections" style={{ backgroundColor: toggleNButtonsBG }}>
        <button
          id="1"
          onClick={() => changeTheme(1)}
          style={{ backgroundColor: themeID === 1 ? toggle : toggleNButtonsBG }}
        ></button>
        <button
          id="2"
          onClick={() => changeTheme(2)}
          style={{ backgroundColor: themeID === 2 ? toggle : toggleNButtonsBG }}
        ></button>
        <button
          id="3"
          onClick={() => changeTheme(3)}
          style={{ backgroundColor: themeID === 3 ? toggle : toggleNButtonsBG }}
        ></button>
      </div>
    </div>
  );
};

export default ThemeSelector;
