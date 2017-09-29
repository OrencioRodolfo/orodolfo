import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../components/Icon/Icon';

const Wrapper = styled.div`
  > i {
    margin: 0 10px;
  }
  > i:last-child {
    margin: 0;
  }
`;

const Social = () => (
  <Wrapper>
    <Icon icon="github fa-2x" />
    <Icon icon="linkedin fa-2x" />
    <Icon icon="twitter fa-2x" />
    <Icon icon="facebook fa-2x" />
  </Wrapper>
);

export default Social;
