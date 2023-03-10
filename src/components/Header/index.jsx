import React from "react";

import {Container} from './styles.js'

const Header = ({onToggleTheme, theme}) => {
 
  return (
    <>
    <Container>
      <h1> Felipe's Blog </h1>
      <button type="button" onClick={onToggleTheme}>{theme === 'dark' ? <span>🌞</span> : <span>🌙</span>}</button>
    </Container>
      
    </>
  );
};

export default Header;
