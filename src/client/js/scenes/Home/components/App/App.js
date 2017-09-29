import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../../../../components/Button/Button';
import PillLeft from '../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../components/Button/PillRight/PillRight';
import Icon from '../../../../components/Icon/Icon';
import Container from '../../../../components/Container/Container';
import Header from '../Header/Header';
import * as theme from '../../../../theme';


const AppContainer = styled.div`
  font-family: ${props => props.theme.fontFamily('primary')};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Header />
      <Container>
        <Button>
          <PillLeft>
            <Icon icon="star" />
            Star
          </PillLeft>
          <PillRight>0</PillRight>
        </Button>
      </Container>
    </AppContainer>
  </ThemeProvider>
);

export default App;
