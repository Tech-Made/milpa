import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./ui/components/NavBar";
import Footer from "./ui/components/Footer";
import Home from "./ui/screens/Home";
import Founder from "./ui/screens/Founder";
import "./styles/styles.scss";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/founder" component={Founder} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
