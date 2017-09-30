import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const I = styled.i`
  cursor: pointer;
`;

const Button = ({ icon }) => (
  <I className={`fa fa-${icon}`} />
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Button;
