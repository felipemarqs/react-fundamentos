import React from "react";

import { useTheme } from "styled-components";
import Header from "../Header/index.jsx";
import PostList from "../PostList/index.jsx";
import Footer from "../Footer/index.jsx";

const Layout = ({ onToggleTheme, selectedTheme }) => {
  const theme = useTheme();

  console.log(theme)
  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <PostList />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </>
  );
};

export default Layout;
