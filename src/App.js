import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className="page-container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/results" component={Results}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;