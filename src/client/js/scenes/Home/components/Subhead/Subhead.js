import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../theme/style-utils';
import RestricitedContainer from '../../../../components/Containers/Restricited/Restricited';
import Button from '../../../../components/Button/Button';
import PillLeft from '../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../components/Button/PillRight/PillRight';
import Icon from '../../../../components/Icon/Icon';
import Link from '../../../../components/Link/Link';

const Wrapper = styled.div`
  padding: 30px 0;
  background-color: ${props => props.theme.color('background', 'lighter')};
  
  ${media.phone`
    position: relative;
    background-color: ${props => props.theme.color('foreground')};
    color: ${props => props.theme.contrast('dark')};
  `}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${media.phone`
    justify-content: center;
    
    .link {
      color: ${props => props.theme.contrast('dark', 'secondary')};
    }

    button {
      position: absolute;
      right: 12px;
    }
  `}

  ${media.iphone`
    justify-content: flex-start;
  `}
`;

const Subhead = () => (
  <Wrapper>
    <RestricitedContainer>
      <Container>
        <Link url="https://github.com/OrencioRodolfo/orodolfo" className="link">OrencioRodolfo / <b>orodolfo</b></Link>
        <Button>
          <PillLeft>
            <Icon icon="star" />
            Star
          </PillLeft>
          <PillRight>0</PillRight>
        </Button>
      </Container>
    </RestricitedContainer>
  </Wrapper>
);

export default Subhead;
