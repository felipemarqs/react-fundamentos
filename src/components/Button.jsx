import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Button = ({ id, onClick, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={onClick}
        style={{
          backgroundColor: theme === "dark" ? "#000" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
