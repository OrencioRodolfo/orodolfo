import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  border-radius: 3px;
  padding: 5px 10px;
  display: flex;
  font-size: 22px;
  background: grey;
  color: white;
`;

const PillRight = ({ children }) => (
  <Button>
    { children }
  </Button>
);

PillRight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default PillRight;
