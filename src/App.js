import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./Home";
import { About } from "./About";
import { Contract } from "./Contract";
import { ContractDetailA } from "./ContractDetailA";
import { ContractDetailB } from "./ContractDetailB";

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
        <Route
          path="/contract"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path="/contract">
                <Contract />
              </Route>
              <Route path={`${url}/datailA`}>
                <ContractDetailA />
              </Route>
              <Route path={`${url}/datailB`}>
                <ContractDetailB />
              </Route>
            </Switch>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
