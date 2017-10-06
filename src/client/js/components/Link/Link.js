import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const A = styled.a`
  color: inherit;
  text-decoration: none;

  &.link {
    color: ${props => props.theme.color()}
  }
`;

const Link = ({ url, className, children }) => (
  <A href={url} className={className} target="_blank" rel="noreferrer noopener">
    { children }
  </A>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Link.defaultProps = {
  className: '',
};

export default Link;
