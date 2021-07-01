import logo from "../../assets/logo.png";

import { Container, Logo, Input, Button } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Logo src={logo} alt="Coders Club" />
      <Input type="text" defaultValue="test@email.com" />
      <Input type="text" defaultValue="12345678" />
      <Button>Entrar</Button>
    </Container>
  );
}
