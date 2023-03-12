import React, { useEffect } from "react";

import { useTheme } from "styled-components";
import Header from "../Header/index.jsx";
import PostList from "../../pages/Posts/index.jsx";
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
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <Routes />
      <Footer on
      ToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </>
  );
};

export default Layout;
