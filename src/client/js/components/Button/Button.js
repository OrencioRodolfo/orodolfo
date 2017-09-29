import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
  border-radius: 3px;
  padding: 0;
  display: flex;
  ${props => props.theme.textSetting('sm')}; // font size and line height
  font-weight: ${props => props.theme.weight('semiBold')};
  color: ${props => props.theme.contrast('light')};
  background: ${props => props.theme.color('background', 'light')};
  border: 1px solid ${props => props.theme.color('background')};
`;

const Button = ({ children }) => (
  <Btn>
    { children }
  </Btn>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Button;
