import React from 'react';
import styled from 'styled-components';
import Container from '../../../../components/Container/Container';
import Social from '../Social/Social';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${props => props.theme.color('background')};
  padding: 20px 0;
`;

const Footer = () => (
  <footer>
    <Container>
      <ContentWrapper>
        <span>orenciorodolfo@gmail.com</span>
        <Social />
      </ContentWrapper>
    </Container>
  </footer>
);

export default Footer;
