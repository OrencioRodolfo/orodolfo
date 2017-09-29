import React from 'react';
import styled from 'styled-components';
import Container from '../../../../components/Container/Container';
import Button from '../../../../components/Button/Button';
import PillLeft from '../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../components/Button/PillRight/PillRight';
import Icon from '../../../../components/Icon/Icon';

const Wrapper = styled.div`
  padding: 30px 0;
  background: ${props => props.theme.color('background', 'lighter')};
`;
const SubheadContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subhead = () => (
  <Wrapper>
    <Container>
      <SubheadContent>
        <span>orodolfo / me</span>
        <Button>
          <PillLeft>
            <Icon icon="star" />
            Star
          </PillLeft>
          <PillRight>0</PillRight>
        </Button>
      </SubheadContent>
    </Container>
  </Wrapper>
);

export default Subhead;
