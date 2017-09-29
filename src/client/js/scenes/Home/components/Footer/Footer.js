import React from 'react';
import styled from 'styled-components';
import Container from '../../../../components/Container/Container';
import Social from '../Social/Social';

const FooterContainer = styled.footer`
  padding: 12px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <ContentWrapper>
        <span>orenciorodolfo@gmail.com</span>
        <Social />
      </ContentWrapper>
    </Container>
  </FooterContainer>
);

export default Footer;
