import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../Header/Header';
import Subhead from '../Subhead/Subhead';
import * as theme from '../../../../theme';

const AppContainer = styled.div`
  font-family: ${props => props.theme.fontFamily('primary')};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Header />
      <Subhead />
    </AppContainer>
  </ThemeProvider>
);

export default App;
