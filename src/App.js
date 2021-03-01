import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Lending from './Components/LendingPage/Lending';
import Login from "./Components/Login/Login";

export const userContext = createContext();

function App() {

  const [logedInUser, setLogedInUser] = useState({});

  return (
    <userContext.Provider value={[logedInUser, setLogedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Lending />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
