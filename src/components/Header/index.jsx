import React from "react";
import { useHistory } from 'react-router-dom'

import { Container } from './styles.js'



const Header = ({ onToggleTheme, selectedTheme }) => {


  const history = useHistory()
  console.log(history)

  const handleNavigation = () => {
    history.push("/posts")
  }
  return (
    <>
      <Container>
        <h1> Fundamentos do React  </h1>
        <button type="button" onClick={onToggleTheme}>{selectedTheme === 'dark' ? <span>🌞</span> : <span>🌙</span>}</button>
      </Container>
    </>
  );
};

export default Header;
