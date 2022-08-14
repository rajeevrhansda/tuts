import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './Theme'

const Container = styled.div`
background-color: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text};
`;

function App() {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getThemeInMemory = localStorage.getItem('theme');
  const themeInMemory = (getThemeInMemory === 'true');
  const [darkMode, setDarkmode] = useState(themeInMemory == null ? systemTheme : themeInMemory);
  localStorage.setItem('theme', darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="app">
        <h1>Styled Components</h1>
        <button onClick={() => setDarkmode(!darkMode)}>SWITCH</button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
