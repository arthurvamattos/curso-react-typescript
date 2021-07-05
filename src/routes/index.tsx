import { Switch } from "react-router-dom";

import CustomRoute from "./Route";

import { Dashboard } from "../pages/Dashboard";
import { SignIn } from "../pages/SignIn";
import { NotFound } from "../pages/NotFound";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export default function Routes() {
  const { signed } = useContext(AuthContext);

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
