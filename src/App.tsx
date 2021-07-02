import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import Routes from "./routes";

import theme from "./styles/theme";
import history from "./services/history";

function App() {
  const newTheme = theme.default;

  return (
    <ThemeProvider theme={newTheme}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
