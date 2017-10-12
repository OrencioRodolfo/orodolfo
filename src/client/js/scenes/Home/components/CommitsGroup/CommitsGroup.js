/* eslint no-underscore-dangle: 0 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../../../theme/style-utils';
import Commit from '../Commit/Commit';

const Ul = styled.ul`
  margin: 10px 0;
  padding: 0;
  border: 1px solid ${props => props.theme.color('background')};
  margin-left: 20px;
  
  ${media.phone`
    margin: 0;
    border-right: 0;
    border-left: 0;
  `}
`;

const renderCommits = commits => (
  commits.map(commit => (
    <Commit commit={commit} key={commit._id} />
  ))
);

const CommitGroup = ({ commits }) => (<Ul>{renderCommits(commits)}</Ul>);

CommitGroup.propTypes = {
  commits: PropTypes.array.isRequired,
};

export default CommitGroup;
