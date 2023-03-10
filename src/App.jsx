import React, {useState, useMemo} from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyle from './styles/global.js'
import Layout from './components/Layout/index.jsx'


import themes from './styles/themes/index.js'

console.log(themes)

const App = () => {

  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(()=> {
    return  themes[theme] || themes.dark;
  }, [theme])

  console.log(theme)

  const handleToggleTheme = () => {
    setTheme((prevState)=> prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle/>
      <Layout onToggleTheme={handleToggleTheme} theme={theme}/>
    </ThemeProvider>
  );
};

export default App;
