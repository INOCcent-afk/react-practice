import "./App.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Thankyou from "./pages/Thankyou";
import { ProductProvider } from "./context/ProductContext";
import { CartCountProvider } from "./context/CartCountContext";

function App() {
  return (
    <ProductProvider>
      <CartCountProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/thankyou" exact component={Thankyou} />
            </Switch>
          </div>
        </Router>
      </CartCountProvider>
    </ProductProvider>
  );
}

export default App;
