import React from 'react';
import styled from 'styled-components';
import RestricitedContainer from '../../../../components/Containers/Restricited/Restricited';
import SpaceBwContainer from '../../../../components/Containers/SpaceBetween/SpaceBetween';
import Social from '../Social/Social';

const ContentWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.color('background')};
  padding: 20px 0;
`;

const Footer = () => (
  <footer>
    <RestricitedContainer>
      <ContentWrapper>
        <SpaceBwContainer>
          <span>orenciorodolfo@gmail.com</span>
          <Social />
        </SpaceBwContainer>
      </ContentWrapper>
    </RestricitedContainer>
  </footer>
);

export default Footer;
