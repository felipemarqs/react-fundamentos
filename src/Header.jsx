import React, { useContext } from "react";
import Button from "./Button.jsx";
import { ThemeContext } from "./ThemeContext.jsx";
import styles from './Header.scss'
console.log(styles)

const Header = ({ title, children, theme }) => {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {children}
      <hr />
    </>
  );
};

export default Header;
