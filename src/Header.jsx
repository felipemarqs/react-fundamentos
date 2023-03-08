import React, { useContext } from "react";
import Button from "./Button.jsx";
import { ThemeContext } from "./ThemeContext.jsx";

const Header = ({ title, children, theme }) => {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>{title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {children}
      <hr />
    </>
  );
};

export default Header;
