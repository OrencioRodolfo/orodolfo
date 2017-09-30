import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const A = styled.a`
  color: inherit;
`;

const Link = ({ url, children }) => (
  <A href={url} target="_blank" rel="noreferrer noopener">
    { children }
  </A>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Link;
