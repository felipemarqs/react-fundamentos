import React from "react";
import Post from "./Post.jsx";
import Header from "./Header.jsx";

const App = () => {
  return (
    <div>
      <Header title="Felipe's Blog">
        <h2>Posts da semana</h2>
      </Header>
      <Post
        likes={20}
        title="Primeiro Artigo"
        subtitle="Subtitle do primeiro"
        paragraph="Lorem Ipsum is simply dummy text of the printing."
      />
      <Post
        likes={50}
        title="Segundo Artigo"
        subtitle="Subtitle do Segundo"
        paragraph="Lorem Ipsum is simply dummy text of the printing."
      />
    </div>
  );
};

export default App;
