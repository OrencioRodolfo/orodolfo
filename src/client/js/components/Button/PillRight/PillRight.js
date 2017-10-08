import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../../theme/style-utils';

const Pill = styled.div`
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 3px 12px;
  background-color: ${props => props.theme.color('background', 'lighter')};

  ${media.phone`
    padding: 3px 5px;
  `}
`;

const PillRight = ({ children }) => (
  <Pill>
    { children }
  </Pill>
);

PillRight.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PillRight;
