import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const themes = require("./themes.json");

  const [themeID, setThemeID] = useState(1);
  const [theme, setTheme] = useState({});

  const changeTheme = (id) => {
    setThemeID(id);
  };

  useEffect(() => {
    setTheme(...themes.filter((theme) => theme.id === themeID));
  }, [themeID]);

  return (
    <ThemeContext.Provider value={{ ...theme, changeTheme, themeID }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
