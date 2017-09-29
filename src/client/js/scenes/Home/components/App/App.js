import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Container from '../../../../components/Container/Container';
import Header from '../Header/Header';
import Subhead from '../Subhead/Subhead';
import Footer from '../Footer/Footer';
import * as theme from '../../../../theme';

const AppContainer = styled.div`
  font-family: ${props => props.theme.fontFamily('primary')};
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  > .main-container {
    flex-grow: 1;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Header />
      <Subhead />
      <Container className="main-container">Rodolfo Gonçalves</Container>
      <Footer />
    </AppContainer>
  </ThemeProvider>
);

export default App;
