import React, { useEffect } from "react";


import Header from "../Header/index.jsx";

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
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </>
  );
};

export default Layout;
