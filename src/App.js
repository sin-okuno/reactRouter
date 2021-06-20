import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

import "./styles.css";

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
      <Router />
    </BrowserRouter>
  );
}
