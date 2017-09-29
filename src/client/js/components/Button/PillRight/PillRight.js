import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Pill = styled.div`
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 3px 10px;
  background-color: ${props => props.theme.color('background', 'lighter')}
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
