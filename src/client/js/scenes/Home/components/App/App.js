import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button/Button';
import PillLeft from '../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../components/Button/PillRight/PillRight';

const H1 = styled.div`
  color: red;
`;

const App = () => (
  <div style={{ textAlign: 'center' }}>
    <H1>Hello World</H1>
    <Button>Hi</Button>
    <Button>
      <PillLeft>left content</PillLeft>
      <PillRight>right</PillRight>
    </Button>
  </div>
);

export default App;
