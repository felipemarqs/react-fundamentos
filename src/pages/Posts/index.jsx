import React from "react";

import { Container } from "./styles";
import Post from "./Post/index.jsx";

import posts from "./posts";

const Posts = () => {
  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} description={post.description} />
      ))}
    </Container>
  );
};

export default Posts;
