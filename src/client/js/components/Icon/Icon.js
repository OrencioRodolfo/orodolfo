import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const I = styled.i`
`;

const Button = ({ icon }) => (
  <I className={`fa fa-${icon}`} />
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Button;
