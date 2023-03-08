import React from "react";
import PropTypes from "prop-types";

const Post = ({ id,title, subtitle, paragraph, likes , onRemove}) => {
  return (
    <>
      <article>
        <strong>{title}</strong>
        <button onClick={() => onRemove(id)}>Remove</button>
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
}

export default Post;
