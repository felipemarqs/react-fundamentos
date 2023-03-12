import React, {
  useState,
  useMemo,
  useLayoutEffect,
  useEffect,
  useRef,
} from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global.js";
import Layout from "./components/Layout/index.jsx";


import themes from "./styles/themes/index.js";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  }, [theme]);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
};

export default App;
