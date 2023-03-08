import React, { useState, useContext } from "react";
import Post from "./Post.jsx";
import Header from "./Header.jsx";
import {ThemeProvider,ThemeContext} from "./ThemeContext.jsx";




const App = () => {
  

  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      likes: 20,
      title: "#1 Post",
      subtitle: "Substitle do primeiro",
      paragraph: "Lorem Ipsum is simply dummy text of the printing.",
      read: false,
    },
    {
      id: Math.random(),
      likes: 20,
      title: "#2 Post",
      subtitle: "Substitle do segundo",
      paragraph: "Lorem Ipsum is simply dummy text of the printing.",
      read: true,
    },
    {
      id: Math.random(),
      likes: 20,
      title: "#3 Post",
      subtitle: "Substitle do terceiro",
      paragraph: "Lorem Ipsum is simply dummy text of the printing.",
      read: false,
    },
  ]);

  const handleRemovePost = (postId) => {
    console.log({ postId });
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  };

  const handleRefresh = () => {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        likes: 45,
        title: `#${prevState.length + 1} Post`,
        substitle: "Subtitle #${posts.length + 1}",
        paragraph: "Lorem Ipsum is simply dummy text of the printing.",
        read: false,
      },
    ]);
  };

  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <Header title="Felipe's Blog">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <h2>{theme}</h2>
      {posts.map((post) => (
        <>
          <Post
            
            theme={theme}
            key={post.id}
            onRemove={handleRemovePost}
            likes={post.likes}
            title={post.title}
            subtitle={post.subtitle}
            paragraph={post.paragraph}
            id={post.id}
            read={post.read}
          />
        </>
      ))}
    </ThemeProvider>
  );
};

export default App;
