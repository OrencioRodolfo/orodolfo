import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../components/Icon/Icon';
import Link from '../../../../components/Link/Link';

const Wrapper = styled.div`
  > a {
    margin: 0 10px;
  }
  > a:last-child {
    margin: 0;
  }
`;

const Social = () => (
  <Wrapper>
    <Link url="https://github.com/OrencioRodolfo">
      <Icon icon="github fa-2x" />
    </Link>
    <Link url="https://www.linkedin.com/in/rodolfo-goncalves">
      <Icon icon="linkedin fa-2x" />
    </Link>
    <Link url="https://twitter.com/orenciorodolfo">
      <Icon icon="twitter fa-2x" />
    </Link>
    <Link url="https://www.facebook.com/orenciorodolfo">
      <Icon icon="facebook fa-2x" />
    </Link>
  </Wrapper>
);

export default Social;
