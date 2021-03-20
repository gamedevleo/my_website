import './App.css';
import {NavBar,Clock} from './components/index';
import {HomePage,PortfolioPage,CssEffectPage,ResumePage} from './Pages/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/resume">
          <ResumePage />
        </Route>
        <Route path="/csseffects">
          <CssEffectPage />
        </Route>
        <Route path="/clock">
          <Clock />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
