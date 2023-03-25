import React from "react";
import { Route, Switch } from "react-router-dom";
import Posts from "./pages/Posts/index.jsx";
import Post from "./pages/Post/index.jsx";
import Home from "./pages/Home/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route component={NotFound}/>
      </Switch>
    </>
  );
};

export default Routes;
