// https://github.com/ARS1337/screens
import "./App.css";
import { Playground } from "./components/Playground";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestingRouter from "./components/TestingRouter";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Playground} />
        <Route path="/TestingRouter" component={TestingRouter} />
      </Switch>
    </Router>
  );
}

export default App;
