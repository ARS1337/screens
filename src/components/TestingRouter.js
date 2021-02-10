import "../App.css";
import React from "react";
import "../App.css";
import Reviews from "./Reviews";
import Recommended from "./Recommended";
import Videos from "./Videos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
                <Header something="ggnoob"/>
              </div>
              <div class="main-navigation">
                <Navigation />
              </div>
              
              <Switch>
                {/* <Route path="/Recommended"> */}
                {/* using Recommended as Home for no  gngf*/}
                <div class="main-content">

                <Route exact path="/TestingRouter" component={Recommended}/>
                <Route exact path="/Recommended" component={Recommended}/>
                <Route path="/Reviews" component={Reviews}/>
                <Route path="/Videos" component={Videos}/>
                </div>

              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default TestingRouter;
