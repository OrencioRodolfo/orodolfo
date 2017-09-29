import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 1012px;
  padding: 0 12px;
  margin: 0 auto;
`;

const Container = props => (
  <Div {...props}>
    { props.children }
  </Div>
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

Container.defaultProps = {
  children: {},
};

export default Container;
