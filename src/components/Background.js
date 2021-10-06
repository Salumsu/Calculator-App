import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Background = () => {
  const { mainBG } = useContext(ThemeContext);
  return <div className="body" style={{ background: mainBG }}></div>;
};

export default Background;
