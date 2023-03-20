import React from "react";
import { useHistory } from 'react-router-dom'

import { Container } from './styles.js'

import icon from '../../assets/icon.png'

const Header = ({ onToggleTheme, selectedTheme }) => {


  const history = useHistory()
  console.log(history)

  const handleNavigation = () => {
    history.push("/posts")
  }
  return (
    <>
      <Container>
        <img src={icon} />
        <h1> Fundamentos do React  </h1>
        <button type="button" onClick={onToggleTheme}>{selectedTheme === 'dark' ? <span>🌞</span> : <span>🌙</span>}</button>
      </Container>
    </>
  );
};

export default Header;
