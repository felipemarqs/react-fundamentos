import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader.jsx";

const Post = ({ id, title, subtitle, paragraph, likes, onRemove, read ,theme}) => {
  console.log(theme)
  return (
    <>
      <article>
        <PostHeader id={id} title={title} onRemove={onRemove} read={read} />
        <br />
        <small>{subtitle}</small>
        <br />
        <p>{paragraph}</p>
        Likes: {likes / 2}
        <hr />
      </article>
    </>
  );
};

Post.propTypes = {
  likes: PropTypes.number.isRequired,
};

export default Post;
