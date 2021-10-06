import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSelector from "./ThemeSelector";

const Header = () => {
  const { outputText } = useContext(ThemeContext);
  return (
    <div className="header">
      <h1 style={{ color: outputText }}>calc</h1>
      <h2 style={{ color: outputText }}>THEME</h2>
      <ThemeSelector />
    </div>
  );
};

export default Header;
