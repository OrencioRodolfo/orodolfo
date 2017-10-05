import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../theme/style-utils';
import RestricitedContainer from '../../../../components/Containers/Restricited/Restricited';
import Button from '../../../../components/Button/Button';
import PillLeft from '../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../components/Button/PillRight/PillRight';
import Icon from '../../../../components/Icon/Icon';

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

    button {
      position: absolute;
      right: 15px;
    }
  `}
`;

const Subhead = () => (
  <Wrapper>
    <RestricitedContainer>
      <Container>
        <spann>orodolfo / me</spann>
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
