import { createContext, useState } from "react";

export const ThemeContext = createContext({ theme: "sports", undefined });

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("sports");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
