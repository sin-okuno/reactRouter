import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./Home";
import { About } from "./About";
import { Contract } from "./Contract";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contract">Contract</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contract">
          <Contract />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}