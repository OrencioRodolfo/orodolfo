/*  eslint no-confusing-arrow: 0  */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../theme/style-utils';

const Btn = styled.button`
  border-radius: 3px;
  padding: 0;
  display: flex;
  ${props => props.theme.textSetting('nr')}; // font size and line height
  font-weight: ${props => props.theme.weight('semiBold')};
  color: ${props => props.theme.contrast('light')};
  background-color: ${props => props.light ? '#fff' : '#eff3f6'};
  border: 1px solid ${props => props.theme.color('background')};
  cursor: pointer;
  line-height: 25px;

  ${media.phone`
    ${props => props.theme.textSetting('xs')}
  `}
`;

const Button = props => (
  <Btn {...props}>
    { props.children }
  </Btn>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Button;
