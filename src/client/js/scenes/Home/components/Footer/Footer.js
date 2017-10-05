import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../theme/style-utils';
import Link from '../../../../components/Link/Link';
import RestricitedContainer from '../../../../components/Containers/Restricited/Restricited';
import Social from '../Social/Social';

const ContentWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.color('background')};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${media.phone`
    justify-content: center;
    padding: 10px 0;

    .link {
      display: none;
    }
  `}
`;

const Footer = () => (
  <footer>
    <RestricitedContainer>
      <ContentWrapper>
        <Link
          url="mailto:orenciorodolfo@gmail.com"
          className="link"
        >
          orenciorodolfo@gmail.com
        </Link>
        <Social />
      </ContentWrapper>
    </RestricitedContainer>
  </footer>
);

export default Footer;
