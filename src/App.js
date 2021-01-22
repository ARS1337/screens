// https://github.com/ARS1337/screens
import logo from "./logo.svg";
import "./App.css";
import Videos from "./components/Videos";
import Title from "./components/Title";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Playground from "./components/Playground";
import Reviews from "./components/Reviews";
import Recommended from "./components/Recommended";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>

    <div className="App">
      <div class="main">
        <div class="main-container">
          <div class="main-title">
            <Title/>
          </div>
          <div class="main-header">
            <Header />
          </div>
          <div class="main-navigation">
            <Navigation />
          </div>
          <Switch>
            {/* <Route path="/Recommended"> */}
            {/* using Recommended as Home */}
            <Route exact path="/"> 
              <div class="main-content">
                <Recommended />
              </div>
            </Route>
            <Route exact path="/Recommended"> 
              <div class="main-content">
                <Recommended />
              </div>
            </Route>
            <Route path="/Reviews">
              <div class="main-content">
                <Reviews />
              </div>
            </Route>
            <Route path="/Videos">
              <div class="main-content">
                <Videos />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
