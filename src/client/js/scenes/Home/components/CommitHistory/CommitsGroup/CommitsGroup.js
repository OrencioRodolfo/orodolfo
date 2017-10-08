/* eslint no-underscore-dangle: 0 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../../../../theme/style-utils';
import Button from '../../../../../components/Button/Button';
import PillLeft from '../../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../../components/Button/PillRight/PillRight';
import Icon from '../../../../../components/Icon/Icon';
import Link from '../../../../../components/Link/Link';
import { monthNames } from '../../../services/months';

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

const Li = styled.li`
  display: flex;
  list-style: none;
  padding: 15px;

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.color('background')};
  }

  &:hover {
    background-color: ${props => props.theme.color('primary', 'lighter')};
  }

  button {
    ${media.phone`
      display: none;
    `}
  }

  i {
    color: ${props => props.theme.color('primary')};
  }
`;

const Body = styled.div`
  flex-grow: 1;
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 3px;
  margin-right: 10px;
  
  ${media.phone`
    width: 20px;
    height: 20px;
  `}
`;

const Title = styled.div`
  font-weight: ${props => props.theme.weight('semiBold')};
  ${props => props.theme.textSetting('nr')};
  margin-bottom: 5px;
  
  ${media.phone`
    font-size: ${props => props.theme.textSetting('sm').fontSize};
    margin-bottom: 0;
  `}
`;

const Author = styled.span`
  ${props => props.theme.textSetting('sm')};
  float: left;
  
  ${media.phone`
    color: ${props => props.theme.contrast('light', 'secondary')};
    ${props => props.theme.textSetting('xs')};
  `}
`;

const AuthorName = styled.span`
  font-weight: ${props => props.theme.weight('semiBold')}
`;

const SmallHash = styled.span`
  display: none;
  ${props => props.theme.textSetting('xs')};
  
  ${media.phone`
    color: ${props => props.theme.contrast('light', 'secondary')};
    display: block;
  `}
`;


const renderCommits = commits => (
  commits.map(commit => (
    <Li key={commit._id}>
      <Img src={commit.image} width="50px" height="50px" alt={commit.title} />
      <Body>
        <Title>{commit.title}</Title>
        <Author>
          <AuthorName>{commit.author}</AuthorName>
          &nbsp;commited on
          &nbsp;{monthNames[commit.date.getMonth()]}
          &nbsp;{commit.date.getFullYear()}
        </Author>
        <SmallHash>&nbsp;- {commit.hashAlias}</SmallHash>
      </Body>
      <div>
        <Button light small>
          <PillLeft>
            <Icon icon="copy" />
          </PillLeft>
          <PillRight>
            <Link url="" className="link">{commit.hashAlias}</Link>
          </PillRight>
        </Button>
      </div>
    </Li>
  ))
);

const CommitGroup = ({ commits }) => (<Ul>{renderCommits(commits)}</Ul>);

CommitGroup.propTypes = {
  commits: PropTypes.array.isRequired,
};

export default CommitGroup;
