import './App.css';
import {NavBar} from './components/index';
import {HomePage,PortfolioPage,CssEffectPage} from './Pages/index';
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
        <Route path="/csseffects">
          <CssEffectPage />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;