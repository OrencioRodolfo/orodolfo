import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../../../../components/Button/Button';
import PillLeft from '../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../components/Button/PillRight/PillRight';
import * as theme from '../../../../theme';

const H1 = styled.div`
  color: red;
`;
const AppContainer = styled.div`
  color: red;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer style={{ textAlign: 'center' }}>
      <H1>Hello World</H1>
      <Button>
        <PillLeft>left content</PillLeft>
        <PillRight>right</PillRight>
      </Button>
    </AppContainer>
  </ThemeProvider>
);

export default App;
