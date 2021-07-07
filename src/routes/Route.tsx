import { Redirect, Route, RouteProps } from "react-router-dom";

import { Loading } from "../components/Loading";
import { useAuth } from "../contexts/auth";

type Props = RouteProps & {
  isPrivate?: boolean;
  signed?: boolean;
};

export default function CustomRoute({
  isPrivate = false,
  signed = false,
  ...rest
}: Props) {
  const { loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}
