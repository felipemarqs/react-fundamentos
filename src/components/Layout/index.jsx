import React, { useEffect } from "react";

import { useTheme } from "styled-components";
import Header from "../Header/index.jsx";
import PostList from "../PostList/index.jsx";
import Footer from "../Footer/index.jsx";

const Layout = ({ onToggleTheme, selectedTheme }) => {

  useEffect(()=>{
    function handleScroll() {
      console.log('Scroll')
    }
    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  },[])



  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <PostList />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </>
  );
};

export default Layout;
