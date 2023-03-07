import React from "react";
import PropTypes from "prop-types";

const Post = ({ title, subtitle, paragraph, likes }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{paragraph}</p>
      Likes: {likes / 2}
      <hr/>
    </>
  );
};

Post.propTypes = {
    likes: PropTypes.number.isRequired,
}

export default Post;
