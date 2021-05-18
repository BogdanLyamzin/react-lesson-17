import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./client/navbar/components/Navbar";
import AllProductsPage from "./client/products/pages/AllProductsPage";
import ToggleButton from "./shared/components/ToggleButton";
import Timer from "./client/timer/components/Timer";
import "./App.css";

import store from "./store";
// import RegisterForm from "./client/auth/components/RegisterForm";
// import LoginForm from "./client/auth/components/LoginForm";
// import ProductList from "./client/products/components/ProductList";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Timer />
        {/* <ProductList /> */}
        {/* <LoginForm /> */}
        {/* <RegisterForm /> */}
        {/* <ToggleButton text="Click me" /> */}
        <Switch>{/* <Route path="/"><AllProductsPage /></Route> */}</Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
