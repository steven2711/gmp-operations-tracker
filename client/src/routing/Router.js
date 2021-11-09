import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
