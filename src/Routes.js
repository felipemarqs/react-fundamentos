import React from "react";
import { Route } from "react-router-dom";
import Posts from "./pages/Posts/index.jsx";
import Post from "./pages/Post/index.jsx";
import Home from "./pages/Home/index.jsx";

const Routes = () => {
  return (
    <>
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/id" component={Post} />
      </>
    </>
  );
};

export default Routes;
