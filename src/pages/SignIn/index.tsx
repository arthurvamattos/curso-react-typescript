import logo from "../../assets/logo.png";

import { Loading } from "../../components/Loading";
import { useAuth } from "../../contexts/auth";

import { Container, Logo, Input, Button } from "./styles";

export function SignIn() {
  const { signIn, loading } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <Container>
      {loading && <Loading />}

      <Logo src={logo} alt="Coders Club" />
      <Input type="text" defaultValue="test@email.com" />
      <Input type="text" defaultValue="12345678" />
      <Button onClick={handleSignIn}>Entrar</Button>
    </Container>
  );
}
