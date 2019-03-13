import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LoadableHome = Loadable({
  loader: () => import("./Home"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadableAbout = Loadable({
  loader: () => import("./About"),
  loading() {
    return <div>Loading...</div>;
  }
});

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={LoadableHome} />
        <Route path="/about/" component={LoadableAbout} />
      </div>
    </Router>
  );
};

export default Routes;
