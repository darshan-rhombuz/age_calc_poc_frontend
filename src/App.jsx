import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AgeCalculator from './components/AgeCalculator';
import { theme } from './theme/theme';

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.colors.background.main};
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    background: ${theme.colors.background.main};
  }
`;

// App Container - smaller and more modular
const AppContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
  box-sizing: border-box;

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 100%;
    padding: ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.sm};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <AgeCalculator />
      </AppContainer>
    </>
  );
}

export default App;