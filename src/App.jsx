import React from "react";
import Post from "./Post.jsx";
import Header from "./Header.jsx";

const posts = [
  {
    id: Math.random(),  
    likes=20,
    title: "#1 Post",
    subtitle: "Substitle do primeiro",
    paragraph:"Lorem Ipsum is simply dummy text of the printing."
  },
  {
    id: Math.random(),
    likes=20,
    title: "#2 Post",
    subtitle: "Substitle do segundo",
    paragraph:"Lorem Ipsum is simply dummy text of the printing."
  },
  {
    id: Math.random(),
    likes=20,
    title: "#3 Post",
    subtitle: "Substitle do terceiro",
    paragraph:"Lorem Ipsum is simply dummy text of the printing."
  }
]

const App = () => {

  const handleRefresh = () => {
    
  }



  return (
    <div>
      <Header title="Felipe's Blog">
        <h2>Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      {posts.map((post)=>(
        <>
        <Post
        key={post.id}
        likes={post.likes}
        title={post.title}
        subtitle={post.subtitle}
        paragraph={post.paragraph}
        />
        </>
      ))}
      
    </div>
  );
};

export default App;
