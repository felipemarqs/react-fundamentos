import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Posts from "./pages/Posts/index.jsx";
import Home from "./pages/Home/index.jsx";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/posts" component={Posts} />
      </BrowserRouter>
    </>
  );
};

export default Routes;
