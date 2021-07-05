import logo from "../../assets/logo.png";
import notFound from "../../assets/not-found.svg";

import { Container, Logo, Image, Content } from "./styles";

export function NotFound() {
  return (
    <Container>
      <Logo src={logo} alt="Coders Club" />
      <Image src={notFound} alt="404" />

      <Content>Page not found :c</Content>
    </Container>
  );
}
