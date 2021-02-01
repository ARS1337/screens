import "../App.css";
import React from "react";
import "../App.css";
import Quote from "./Quote";
import Reviews from "./Reviews";
import Recommended from "./Recommended";
import Videos from "./Videos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Title } from "./Title";
import Header from "./Header";
import Navigation from './Navigation';

function TestingRouter() {
  return (
    <>
      <Router>
        <div className="App">
          <div class="main">
            <div class="main-container">
              <div class="main-title">
                <Title />
              </div>
              <div class="main-header">
                <Header />
              </div>
              <div class="main-navigation">
                <Navigation />
              </div>
              
              <Switch>
                {/* <Route path="/Recommended"> */}
                {/* using Recommended as Home for no  gngf*/}
                <Route exact path="/TestingRouter">
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
    </>
  );
}

export default TestingRouter;
