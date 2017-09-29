import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
  border-radius: 3px;
  padding: 0;
  display: flex;
  ${props => props.theme.textSetting('sm')}; // font size and line height
  color: ${props => props.theme.contrast('light')};
  border: 1px solid ${props => props.theme.color('background')};
`;

const Button = ({ children }) => (
  <Btn>
    { children }
  </Btn>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default Button;
