import React, { useEffect } from "react";

import { BrowserRouter} from 'react-router-dom'

import Header from "../Header/index.jsx";
import Navbar from '../Navbar/index.jsx'
import Footer from "../Footer/index.jsx";
import Routes from "../../Routes.js";

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
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <Navbar/>
      <Routes />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </BrowserRouter>
  );
};

export default Layout;
