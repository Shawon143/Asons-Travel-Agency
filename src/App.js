import "./App.css";
import Header from "./component/Header/Header";
import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Notfound from "./component/NotFound/Notfound";
import Footer from "./component/Footer/Footer";
import Homepage from "./component/Home/Homepage/Homepage";
import PrivateRoute from "./component/Privateroute/PrivateRoute";
import ServiceDetails from "./component/servicedetails/ServiceDetails";
import MyOrder from "./component/Myorder/MyOrder";
import PlaceOrder from "./component/PlaceOrder/PlaceOrder";
import AddService from "./component/AddService/AddService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Homepage></Homepage>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:serviceName">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/services/:serviceID">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route path="/addservice">
              <AddService></AddService>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
