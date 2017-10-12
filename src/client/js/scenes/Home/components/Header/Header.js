import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../theme/style-utils';
import RestricitedContainer from '../../../../components/Containers/Restricited/Restricited';
import SpaceBwContainer from '../../../../components/Containers/SpaceBetween/SpaceBetween';
import Link from '../../../../components/Link/Link';
import Social from '../Social/Social';

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color('foreground')};
  padding: 12px 0;
  color: ${props => props.theme.contrast('dark')};
  ${media.phone`display: none;`}
`;

const Tag = styled.span`
  color: ${props => props.theme.contrast('dark', 'secondary')};
  font-weight: ${props => props.theme.weight('semiBold')};
  ${props => props.theme.textSetting('nr')};
`;

const Header = () => (
  <HeaderWrapper>
    <RestricitedContainer>
      <SpaceBwContainer>
        <Link url="https://twitter.com/orenciorodolfo">
          <Tag>@orenciogoncalves</Tag>
        </Link>
        <Social />
      </SpaceBwContainer>
    </RestricitedContainer>
  </HeaderWrapper>
);

export default Header;
