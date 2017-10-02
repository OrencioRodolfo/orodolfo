import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  border-raius: 3px;
  border: 1px solid ${props => props.theme.color('background')};
  padding: 10px;
`;

const Container = props => (
  <Div {...props}>
    { props.children }
  </Div>
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Container;
