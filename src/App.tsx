import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import Routes from "./routes";

import ContextProvider from "./contexts";

import theme from "./styles/theme";
import history from "./services/history";

function App() {
  const newTheme = theme.default;

  return (
    <ThemeProvider theme={newTheme}>
      <ContextProvider>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
