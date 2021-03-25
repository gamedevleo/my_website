import './App.css';
import {NavBar,Clock,Tooltip,ImgCut} from './components/index';
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
        <Route path="/tooltip">
          <Tooltip />
        </Route>
        <Route path="/imgcut">
          <ImgCut />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
