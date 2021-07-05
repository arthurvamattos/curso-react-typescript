import { Route, Switch } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={SignIn} exact />
      <Route component={NotFound} />
    </Switch>
  );
}
