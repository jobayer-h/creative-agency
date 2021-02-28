import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Lending from './Components/LendingPage/Lending';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Lending />
        </Route>
        
      </Switch>
  </Router>
  );
}

export default App;
