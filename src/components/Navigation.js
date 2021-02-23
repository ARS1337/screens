import React from "react";
import "../App.css";
import Videos from "./Videos";
import Title from "./Title";
import Header from "./Header";
import Reviews from "./Reviews";
import Recommended from "./Recommended";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";


function Navigation() {
   return (
    <>
        <>
          <nav>
            <ul class="leftMenu">
              <li>
                <Link to="#">Meals</Link>
              </li>
              <li>
                <Link to="#">Combos</Link>
              </li>
              <li>
                <Link to="/Recommended">Recommended</Link>
              </li>
              <li>
                <Link to="#">Extras</Link>
              </li>
              <li>
                <Link to="/Reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/Videos">Videos</Link>
              </li>
            </ul>
          </nav>


        </>

      </>
   )
}

export default Navigation
