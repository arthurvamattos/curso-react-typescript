import { useEffect } from "react";
import { useContext } from "react";
import { createContext, ReactNode, useState } from "react";
import api from "../services/api";
import history from "../services/history";

type Props = {
  children?: ReactNode;
};

type User = {
  name: string;
};

type AuthContextData = {
  signed: boolean;
  signIn: () => void;
  loading: boolean;
  user: User;
};

const initalState = {
  signed: false,
  signIn: () => {},
  loading: false,
  user: {
    name: "",
  },
};

const AuthContext = createContext<AuthContextData>(initalState);

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>(initalState.user);
  const [loading, setLoading] = useState(initalState.loading);
  const [signed, setSigned] = useState(initalState.signed);

  useEffect(() => {
    const storedToken = localStorage.getItem("@Auth:TOKEN");
    const storedUser = localStorage.getItem("@Auth:USER");

    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      setSigned(true);
      api.defaults.headers.authorization = `Bearer ${storedToken}`;
    }
  }, []);

  async function signIn() {
    try {
      setLoading(true);
      const { data } = await api.post("/signin");

      const apiUser = { name: data.name };

      api.defaults.headers.authorization = `Bearer ${data.token}`;
      localStorage.setItem("@Auth:TOKEN", data.token);
      localStorage.setItem("@Auth:USER", JSON.stringify(apiUser));

      setUser(apiUser);
      setSigned(true);
      setLoading(false);

      history.push("/dashboard");
    } catch (error) {}
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
