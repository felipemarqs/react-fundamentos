import React, { useEffect } from "react";

import { BrowserRouter } from 'react-router-dom'

//Styled components
import { Container, MainContainer } from './styles'

import Header from "../Header/index.jsx";
import Navbar from '../Navbar/index.jsx'
import Footer from "../Footer/index.jsx";
import Routes from "../../Routes.js";


const Layout = ({ onToggleTheme, selectedTheme }) => {

  return (
    <BrowserRouter>
      <Container>
        <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
        <Navbar />

        <MainContainer>
          <Routes />
        </MainContainer>
        <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
