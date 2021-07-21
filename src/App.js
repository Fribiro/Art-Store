import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollUp from "./components/ScrollUp";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Header from './components/Header.style';
import Footer from './components/Footer.style';
import Homepage from './components/homepage/Homepage';

library.add(
  faChevronUp
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
      <ScrollUp showBelow={1500} />
    </div>
  );
}

export default App;
