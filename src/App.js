import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Events from './pages/Events/Events';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className="page-container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/results" exact component={Results}></Route>
            <Route path="/events" exact component={Events}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;