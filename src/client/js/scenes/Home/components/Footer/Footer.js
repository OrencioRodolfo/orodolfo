import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../theme/style-utils';
import Link from '../../../../components/Link/Link';
import Icon from '../../../../components/Icon/Icon';
import RestricitedContainer from '../../../../components/Containers/Restricited/Restricited';
import Social from '../Social/Social';

const ContentWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.color('background')};
  padding: 20px 0;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${media.phone`
    justify-content: center;
    padding: 10px 0;
    margin-top: 15px;
    
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
          <Icon icon="envelope-o fa-lg" />
        </Link>
        <Social />
      </ContentWrapper>
    </RestricitedContainer>
  </footer>
);

export default Footer;
