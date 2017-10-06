/*  eslint no-confusing-arrow: 0  */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../theme/style-utils';

const Btn = styled.button`
  border-radius: 3px;
  padding: 0;
  display: flex;
  ${props => props.theme.textSetting('sm')}; // font size and line height
  font-weight: ${props => props.theme.weight('semiBold')};
  color: ${props => props.theme.contrast('light')};
  background: ${props => props.light ? props.theme.color('background', 'lighter') : props.theme.color('background', 'light')};
  border: 1px solid ${props => props.theme.color('background')};
  cursor: pointer;

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
