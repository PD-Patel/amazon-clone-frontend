import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import AddressPage from "./pages/AddressPage";
import Checkout from "./pages/Checkout";

import GamingAccessories from "./pages/GamingAccessories";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import { loadStripe } from "@stripe/stripe-js";
import { useStateValue } from "./StateProvider";
import Order from "./pages/Order";

const promise = loadStripe(
  "pk_test_51HgN2MEbVfqclRsyOIeeqo3gLG4ByAPcIomiOG21TLk9silMr17tzsi4YYJgBSO91nlTqnEkY5zxixTMQT3Ds4oQ00102ILmuR"
);

function App() {
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser?.emailVerified) {
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // });

  const [{ user }] = useStateValue();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={"/pf_949905674748947"}>
            <Elements stripe={promise}>
              <PlaceOrder />
            </Elements>
          </Route>

          <Route path={"/pf_94994"}>
            <AddressPage />
          </Route>

          <Route path="/order">
            <Header />
            <Order />
          </Route>
          <Route path="/pf_2607">
            <Verify />
          </Route>
          <Route path="/gaming_accessories">
            <Header />
            <GamingAccessories />
          </Route>
          <Route path="/payment">
            <h1>Payment</h1>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
