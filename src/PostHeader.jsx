import React from "react";
import Button from "./Button.jsx";

const PostHeader = ({ id, title, onRemove, read, theme }) => {
  return (
    <>
      <strong>
        {read && <s>{title}</s>}
        {!read && title}
      </strong>
      <Button id={id} onClick={() => onRemove(id)} theme={theme}>
        Remover
      </Button>
    </>
  );
};

export default PostHeader;
