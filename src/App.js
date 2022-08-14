import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme} from './Theme'

const Container = styled.div`
background-color: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text};
`;

function App() {
  const [darkMode ,setDarkMOde] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="app">
        <h1>Styled Components</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
