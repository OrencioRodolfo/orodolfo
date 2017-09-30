import React from 'react';
import styled from 'styled-components';
import RestricitedContainer from '../../../../components/Containers/Restricited/Restricited';
import SpaceBwContainer from '../../../../components/Containers/SpaceBetween/SpaceBetween';
import Button from '../../../../components/Button/Button';
import PillLeft from '../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../components/Button/PillRight/PillRight';
import Icon from '../../../../components/Icon/Icon';

const Wrapper = styled.div`
  padding: 30px 0;
  background: ${props => props.theme.color('background', 'lighter')};
`;

const Subhead = () => (
  <Wrapper>
    <RestricitedContainer>
      <SpaceBwContainer>
        <span>orodolfo / me</span>
        <Button>
          <PillLeft>
            <Icon icon="star" />
            Star
          </PillLeft>
          <PillRight>0</PillRight>
        </Button>
      </SpaceBwContainer>
    </RestricitedContainer>
  </Wrapper>
);

export default Subhead;
