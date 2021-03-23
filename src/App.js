import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddService from "./Components/Dashbord/AddService";
import Dashboard from "./Components/Dashbord/Dashboard";
import MakeAdmin from "./Components/Dashbord/MakeAdmin";
import OrderForm from "./Components/Dashbord/OrderForm";
import OrderItem from "./Components/Dashbord/OrderItem";
import OrderList from "./Components/Dashbord/OrderList";
import ReviewForm from "./Components/Dashbord/ReviewForm";
import Lending from './Components/LendingPage/Lending';
import Login from "./Components/Login/Login";
import PriveteRoute from "./Components/Login/PrivateRoute";
import AOS from 'aos';
import 'aos/dist/aos.css';
import firebase from "firebase/app";
import "firebase/auth";


export const userContext = createContext();

function App() {
  AOS.init();
  const [logedInUser, setLogedInUser] = useState(null);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const currUser = user;
      setLogedInUser(currUser);
    }
  });
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

          <PriveteRoute path="/dashbord/order">
            <Dashboard page={'Order'} component={OrderForm} />
          </PriveteRoute>
          <PriveteRoute path="/dashbord/service">
            <Dashboard page={'Service'} component={OrderItem} />
          </PriveteRoute>
          <PriveteRoute path="/dashbord/review">
            <Dashboard page={'Review'} component={ReviewForm} />
          </PriveteRoute>
          <PriveteRoute path="/dashbord/addadmin">
            <Dashboard page={'Make Admin'} component={MakeAdmin} />
          </PriveteRoute>
          <PriveteRoute path="/dashbord/addservice">
            <Dashboard page={'Add Service'} component={AddService} />
          </PriveteRoute>
          <PriveteRoute path="/dashbord/allservice">
            <Dashboard page={'Services List'} component={OrderList} />
          </PriveteRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
