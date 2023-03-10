import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader.jsx";

import { Subtitle , Rate, Paragraph, Container}  from './styles.js'


const Post = ({
  id,
  title,
  subtitle,
  paragraph,
  likes,
  onRemove,
  read,
  removed,
}) => {
  return (
    <>
      <Container removed={removed}>
        <PostHeader id={id} title={title} onRemove={onRemove} read={read} />
    
        <Subtitle>{subtitle}</Subtitle>
       
        <Paragraph>{paragraph}</Paragraph>
        <Rate>👍: {likes / 2}</Rate>
        <hr />
      </Container>
    </>
  );
};

Post.propTypes = {
  likes: PropTypes.number.isRequired,
};

export default Post;
