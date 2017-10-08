import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../../theme/style-utils';

const Pill = styled.div`
  padding: 3px 12px;
  border-right: 1px solid ${props => props.theme.color('background')};
  
  > i {
    margin-right: 5px;
  }
  
  ${media.phone`
    padding: 3px;
    
    > i {
      margin-right: 3px;
    }
  `}
`;

const PillLeft = ({ children }) => (
  <Pill>
    { children }
  </Pill>
);

PillLeft.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PillLeft;
