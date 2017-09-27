import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Pill = styled.div`
  border-right: 1px solid white;
  padding-right: 5px;
  margin-right: 5px;
`;

const PillLeft = ({ children }) => (
  <Pill>
    { children }
  </Pill>
);

PillLeft.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PillLeft;
