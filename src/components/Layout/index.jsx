import React, { useEffect } from "react";

<<<<<<< HEAD
//Components
import Header from "../Header/index.jsx";
=======
import { BrowserRouter } from 'react-router-dom'

//Styled components
import { Container, MainContainer } from './styles'

import Header from "../Header/index.jsx";
import Navbar from '../Navbar/index.jsx'
>>>>>>> origin/main
import Footer from "../Footer/index.jsx";
import Routes from "../../Routes.js";
import {Nav} from './styles.js'

//React Router DOM
import { Link, BrowserRouter } from "react-router-dom";


const Layout = ({ onToggleTheme, selectedTheme }) => {

  return (
    <BrowserRouter>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <Nav>
        <Link to="/home">Home</Link>
        <Link to="/posts">Posts</Link>
      </Nav>
      <Routes />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </BrowserRouter>
  );
};

export default Layout;
