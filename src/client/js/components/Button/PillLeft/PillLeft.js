import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Pill = styled.div`
  padding: 3px 10px;
  border-right: 1px solid ${props => props.theme.color('background')};

  > i {
    margin-right: 5px;
  }
`;

const PillLeft = ({ children }) => (
  <Pill>
    { children }
  </Pill>
);

PillLeft.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PillLeft;
