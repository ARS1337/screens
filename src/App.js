// https://github.com/ARS1337/screens
import logo from "./logo.svg";
import "./App.css";
import Videos from "./components/Videos";
import { Title } from "./components/Title";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { clearPlaceholder, Playground } from "./components/Playground";
import Reviews from "./components/Reviews";
import Recommended from "./components/Recommended";
import Quote from "./components/Quote";
import Card from './components/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import TestingRouter from "./components/TestingRouter";
import Detch from './components/Detch';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={Playground}/>
        <Route path="/TestingRouter" component={TestingRouter}/>
      </Switch>
     </Router>
    // <Detch/>

  );
}

export default App;
