import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import styles from "./routes.module.css";
const Routes = () => {
  return (
    <div>
      <ul className={styles.navBar}>
        <li>
          <a href="/">Home World </a>
        </li>
        <li>
          <a href="/Contact">Contact World </a>
        </li>
      </ul>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
