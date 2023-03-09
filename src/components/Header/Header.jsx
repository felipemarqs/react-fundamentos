import React, { useContext } from "react";
import Button from "../Button.jsx";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const Title = styled.h1`
  color: #637BF3; ;
`;


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
