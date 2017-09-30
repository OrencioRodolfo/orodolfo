import React from 'react';
import styled from 'styled-components';
import Link from '../../../../components/Link/Link';
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
          <Link
            url="mailto:orenciorodolfo@gmail.com"
            className="link"
          >
            orenciorodolfo@gmail.com
          </Link>
          <Social />
        </SpaceBwContainer>
      </ContentWrapper>
    </RestricitedContainer>
  </footer>
);

export default Footer;
