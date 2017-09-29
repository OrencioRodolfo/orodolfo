import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../components/Icon/Icon';
import Container from '../../../../components/Container/Container';

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color('foreground')};
  padding: 12px 0;
  color: ${props => props.theme.contrast('dark')};
`;
const HeaderContent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SocialIcons = styled.div`
  > i {
    margin: 0 10px;
  }
  > i:last-child {
    margin: 0;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Container>
      <HeaderContent>
        <span>@orenciorodolfo</span>
        <SocialIcons>
          <Icon icon="github fa-2x" />
          <Icon icon="linkedin fa-2x" />
          <Icon icon="twitter fa-2x" />
          <Icon icon="facebook fa-2x" />
        </SocialIcons>
      </HeaderContent>
    </Container>
  </HeaderWrapper>
);

export default Header;
