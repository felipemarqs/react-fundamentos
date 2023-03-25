import React, { useEffect } from "react";

//Components
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import Routes from "../../Routes.js";
import {Nav} from './styles.js'

//React Router DOM
import { Link, BrowserRouter } from "react-router-dom";

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
