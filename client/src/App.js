import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Dashboard, Checkin, Checkout } from "./pages/Dashboard";
import {
  Services,
  Addrooms,
  Addstaffs,
  Addvehicles,
} from "./pages/Services";
import { Customers, EventsOne, EventsTwo } from "./pages/Customers";
import moneyRegister from "./pages/MoneyRegister";
import BookingForm from "./pages/BookingForm";
import CustomerDetail from "./pages/CustomerDetail";
import Invoice from "./pages/Invoice";
import StaffDetail from "./pages/StaffDetail";
import ReceptionistDetail from "./pages/ReceptionistDetail";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Login" exact component={Login} />
        <Route path="/about-us" exact component={Dashboard} />
        <Route path="/about-us/Checkin" exact component={Checkin} />
        <Route path="/about-us/Checkout" exact component={Checkout} />
        <Route path="/about-us/Checkout/:id" exact component={Checkout} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/Addrooms" exact component={Addrooms} />
        <Route path="/services/Addrooms/:id" exact component={Addrooms} />
        <Route path="/services/Addstaffs" exact component={Addstaffs} />
        <Route path="/services/Addstaffs/:id" exact component={Addstaffs} />
        <Route path="/services/Addvehicles" exact component={Addvehicles} />
        <Route path="/services/Addvehicles/:id" exact component={Addvehicles} />
        <Route path="/moneyRegister" exact component={moneyRegister} />
        <Route path="/Customers" exact component={Customers} />
        <Route path="/events/events1" exact component={EventsOne} />
        <Route path="/events/events2" exact component={EventsTwo} />
        <Route path="/BookingForm" exact component={BookingForm} />
        <Route path="/BookingForm/:id" exact component={BookingForm} />
        <Route path="/Invoice/:id" exact component={Invoice} />
        <Route path="/CustomerDetail/:id" exact component={CustomerDetail} />
        <Route path="/StaffDetail/:id" exact component={StaffDetail} />
        <Route path="/ReceptionistDetail/:id" exact component={ReceptionistDetail} />
      </Switch>
    </Router>
  );
}
  
export default App;