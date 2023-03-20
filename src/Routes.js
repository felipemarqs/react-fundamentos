import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { useTransition, animated } from "react-spring";
import Posts from "./pages/Posts/index.jsx";
import Post from "./pages/Post/index.jsx";
import Home from "./pages/Home/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

const Routes = () => {

  const location = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(50px)' },
  })

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/id" component={Post} />
          <Route component={NotFound} />
        </Routes>
      </Switch>
    </animated.div>
  ));
};

export default Routes;
