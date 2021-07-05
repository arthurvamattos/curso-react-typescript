import { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

import { Loading } from "../components/Loading";

type Props = RouteProps & {
  isPrivate?: boolean;
  signed?: boolean;
};

export default function CustomRoute({
  isPrivate = false,
  signed = false,
  ...rest
}: Props) {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}
