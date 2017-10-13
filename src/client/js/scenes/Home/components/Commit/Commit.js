/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../../../theme/style-utils';
import Button from '../../../../components/Button/Button';
import PillLeft from '../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../components/Button/PillRight/PillRight';
import Icon from '../../../../components/Icon/Icon';
import Link from '../../../../components/Link/Link';
import { monthNames } from '../../services/months';

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

  i {
    color: ${props => props.theme.color('primary')};
  }
`;

const HashBtnContainer = styled.div`
  ${media.phone`
    display: none;
  `}
`;

const Body = styled.div`
  flex-grow: 1;
`;

const Message = styled.div`
  display: flex;
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
  display: flex;
  align-items: center;
  
  ${media.phone`
    font-size: ${props => props.theme.textSetting('sm').fontSize};
    margin-bottom: 0;
  `}
`;

const ExpandDescriptionBtn = styled.button`
  padding: 0 10px 5px;
  background-color: ${props => props.theme.color('background')};
  font-size: ${props => props.theme.textSetting('xs').fontSize};
  margin-left: 10px;
  border: 0;
  cursor: pointer;
  
  ${media.phone`
    
  `}

  &:active {
    background-color: ${props => props.theme.color('primary', 'light')};
    color: ${props => props.theme.contrast('dark')};
  }
`;

const Author = styled.span`
  ${props => props.theme.textSetting('sm')};
  
  ${media.phone`
    color: ${props => props.theme.contrast('light', 'secondary')};
    ${props => props.theme.textSetting('xs')};
  `}
`;

const AuthorName = styled.span`
  font-weight: ${props => props.theme.weight('semiBold')}
`;

const HashAlias = styled.span`
  color: ${props => props.theme.color()};
`;

const CommitedBy = styled.span`
  display: none;
  
  ${media.phone`
    display: block;
  `}
`;

const CommitedOn = styled.span`
  ${media.phone`
    display: none;
  `}
`;

const Description = styled.p`
  ${props => props.theme.textSetting('sm')}
  
  ${media.phone`
    ${props => props.theme.textSetting('xs')}
  `}
`;

class Commit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  getCommitHash() {
    const { commit } = this.props;
    return commit._id.substring(commit._id.length - 7);
  }

  toggleDescription() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  renderDescription() {
    if (this.state.expanded) {
      return (
        <Description>{this.props.commit.description}</Description>
      );
    }

    return null;
  }

  renderExpandButton() {
    const { commit } = this.props;
    if (commit.description && commit.description.length > 0) {
      return (
        <ExpandDescriptionBtn onClick={() => this.toggleDescription()}>
          ...
        </ExpandDescriptionBtn>
      );
    }

    return null;
  }

  renderHashBtn() {
    const { commit } = this.props;
    if (commit.link && commit.link.length > 0) {
      return (
        <HashBtnContainer>
          <Link url={commit.link}>
            <Button light small title="Related link">
              <PillLeft>
                <Icon icon="link" />
              </PillLeft>
              <PillRight>
                <HashAlias>
                  {this.getCommitHash()}
                </HashAlias>
              </PillRight>
            </Button>
          </Link>
        </HashBtnContainer>
      );
    }

    return null;
  }

  renderHashLink() {
    const { commit } = this.props;
    if (commit.link && commit.link.length > 0) {
      return (
        <span>
          &nbsp;-
          &nbsp;<Link url={commit.link} className="link">{this.getCommitHash()}</Link>
        </span>
      );
    }

    return null;
  }

  render() {
    const { commit } = this.props;
    if (Object.keys(commit).length) {
      return (
        <Li>
          <Img src={commit.image} width="50px" height="50px" alt={commit.title} />
          <Body>
            <Title>
              <span>{commit.title}</span>
              {this.renderExpandButton()}
            </Title>
            <Message>
              <Author>
                <CommitedBy>
                  Commited by
                  &nbsp;<AuthorName>{commit.author}</AuthorName>
                  {this.renderHashLink()}
                </CommitedBy>
                <CommitedOn>
                  <AuthorName>{commit.author}</AuthorName>
                  &nbsp;commited on {monthNames[commit.date.getMonth()]}
                  &nbsp;{commit.date.getFullYear()}
                </CommitedOn>
              </Author>
            </Message>
            {this.renderDescription()}
          </Body>
          {this.renderHashBtn()}
        </Li>
      );
    }

    return null;
  }
}

Commit.propTypes = {
  commit: PropTypes.object.isRequired,
};

export default Commit;
