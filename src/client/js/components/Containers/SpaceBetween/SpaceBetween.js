import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
