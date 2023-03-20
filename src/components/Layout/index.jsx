import React, { useEffect } from "react";

import { BrowserRouter } from 'react-router-dom'

//Styled components
import { Container, MainContainer } from './styles'

import Header from "../Header/index.jsx";
import Navbar from '../Navbar/index.jsx'
import Footer from "../Footer/index.jsx";
import Routes from "../../Routes.js";
import Sidebar from '../Sidebar/index.js';


const Layout = ({ onToggleTheme, selectedTheme }) => {
  useEffect(() => {
    function handleScroll() {
      console.log("Scroll");
    }
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
        <Navbar />
        {/*  <Sidebar /> */}
        <MainContainer>
          <Routes />
        </MainContainer>
        <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
