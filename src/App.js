import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ProfileInfo from './pages/CheckoutProcess/ProfileInfo'
import BillingInfo from './pages/CheckoutProcess/BillingInfo'
import ConfirmPayment from './pages/CheckoutProcess/ConfirmPayment'
import PurchaseCompleted from './pages/CheckoutProcess/PurchaseCompleted'
import LandingPage from './pages/CheckoutProcess/LandingPage'



function App() {
  return (
    <div className="container  min-h-screen md:px-64  sm:px-1 md:pt-24">
      <Router>
        <Switch>
          <Route path="/purchase-completed">
            <PurchaseCompleted />
          </Route>
          <Route path="/confirm-payment">
            <ConfirmPayment />
          </Route>
          <Route path="/billing-info">
            <BillingInfo />
          </Route>
          <Route path="/profile-info">
            <ProfileInfo />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
