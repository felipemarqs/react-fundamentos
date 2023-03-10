import React from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyle from './styles/global.js'
import Layout from './components/Layout/index.jsx'


import themes from './styles/themes/index.js'

console.log(themes)

const App = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle/>
      <Layout/>
    </ThemeProvider>
  );
};

export default App;
