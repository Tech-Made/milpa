import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./ui/components/NavBar";
import Footer from "./ui/components/Footer";
import Home from "./ui/screens/Home";
import "./styles/styles.scss";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
