// https://github.com/ARS1337/screens
import "./App.css";
import { clearPlaceholder, Playground } from "./components/Playground";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TestingRouter from "./components/TestingRouter";
// import Detch from './components/Detch';

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
