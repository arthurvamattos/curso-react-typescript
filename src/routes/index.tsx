import { Switch } from "react-router-dom";

import { useAuth } from "../contexts/auth";

import { Dashboard } from "../pages/Dashboard";
import { SignIn } from "../pages/SignIn";
import { NotFound } from "../pages/NotFound";

import CustomRoute from "./Route";

export default function Routes() {
  const { signed } = useAuth();

  return (
    <Switch>
      <CustomRoute
        isPrivate
        path="/dashboard"
        signed={signed}
        component={Dashboard}
        exact
      />
      <CustomRoute path="/" component={SignIn} exact />

      <CustomRoute component={NotFound} />
    </Switch>
  );
}
