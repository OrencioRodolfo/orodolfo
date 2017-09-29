import React from 'react';
import styled from 'styled-components';
import Container from '../../../../components/Container/Container';
import Social from '../Social/Social';

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

const Tag = styled.span`
  color: ${props => props.theme.contrast('dark', 'secondary')};
`;

const Header = () => (
  <HeaderWrapper>
    <Container>
      <HeaderContent>
        <Tag>@orenciorodolfo</Tag>
        <Social />
      </HeaderContent>
    </Container>
  </HeaderWrapper>
);

export default Header;
