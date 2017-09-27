import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Pill = styled.div`
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const PillRight = ({ children }) => (
  <Pill>
    { children }
  </Pill>
);

PillRight.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PillRight;
