import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ icon }) => (
  <i className={`fa fa-${icon}`} />
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Button;
