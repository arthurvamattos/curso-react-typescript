import { ThemeProvider } from "styled-components";

import { SignIn } from "./pages/SignIn";
import { GlobalStyle } from "./styles/global";

import theme from "./styles/theme";

function App() {
  const newTheme = theme.default;

  return (
    <ThemeProvider theme={newTheme}>
      <SignIn />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
