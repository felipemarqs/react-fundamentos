import React, { useContext } from "react";
import Button from "../Button.jsx";

import { ThemeContext } from "../../context/ThemeContext.jsx";

import Title from '../Title.jsx'



const Header = ({ title, children, theme }) => {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {children}
      <hr />
    </>
  );
};

export default Header;
