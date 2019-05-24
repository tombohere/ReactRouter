import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import IconList from "./IconList";
import Schedule from "./Schedule";
import About from "./About";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/list" component={IconList} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/about" component={About} />
    </Switch>
  </main>
);

export default Main;
