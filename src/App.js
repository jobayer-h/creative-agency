import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from "./Components/Dashbord/Dashboard";
import Lending from './Components/LendingPage/Lending';
import Login from "./Components/Login/Login";
import PriveteRoute from "./Components/Login/PrivateRoute";

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
          <Route path="/dash">
            <Dashboard />
          </Route>
          {/* <PriveteRoute path="/order">
          </PriveteRoute> */}
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
