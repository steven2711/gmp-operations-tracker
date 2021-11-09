import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
