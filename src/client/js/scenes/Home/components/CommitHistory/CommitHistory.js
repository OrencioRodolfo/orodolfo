/* global fetch */
/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getHistory } from '../../../../actions';
import Button from '../../../../components/Button/Button';
import PillLeft from '../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../components/Button/PillRight/PillRight';
import Icon from '../../../../components/Icon/Icon';
import Link from '../../../../components/Link/Link';
import { media } from '../../../../theme/style-utils';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  border: 1px solid ${props => props.theme.color('background')};
  border-radius: 4px;

  ${media.phone`
    border-radius: 0;
    border-right: 0;
    border-left: 0;
  `}
`;

const Li = styled.li`
  display: flex;
  list-style: none;
  padding: 10px 5px;

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
`;

const Body = styled.div`
  flex-grow: 1;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 10px;
  
  ${media.phone`
    width: 20px;
    height: 20px;
  `}
`;

const Title = styled.span`
  font-weight: ${props => props.theme.weight('semiBold')};
  font-size: ${props => props.theme.textSetting('sm').fontSize};
`;

const Desc = styled.p`
  margin: 0;
  ${props => props.theme.textSetting('xs')};
`;

const Author = styled.span`
  ${props => props.theme.textSetting('xs')};
  color: ${props => props.theme.contrast('light', 'secondary')};
  float: left;
`;

const SmallHash = styled.span`
  display: none;
  color: ${props => props.theme.contrast('light', 'secondary')};
  ${props => props.theme.textSetting('xs')};

  ${media.phone`
    display: block;
  `}
`;

class CommitHistory extends Component {
  componentWillMount() {
    fetch(`${API_URL}/commit`)
      .then(response => response.json())
      .then((response) => {
        this.props.getHistory(response);
      });
  }

  renderHistory() {
    return this.props.commits.map(commit => (
      <Li key={commit._id}>
        <Img src={commit.image} width="50px" height="50px" alt={commit.title} />
        <Body>
          <Title>{commit.title}</Title>
          <Desc>{commit.description}</Desc>
          <Author>commited by {commit.author} </Author>
          <SmallHash>&nbsp;- {commit.hashAlias}</SmallHash>
        </Body>
        <div>
          <Button light>
            <PillLeft>
              <Link className="link">{commit.hashAlias}</Link>
            </PillLeft>
            <PillRight>
              <Icon icon="code" />
            </PillRight>
          </Button>
        </div>
      </Li>
    ));
  }

  render() {
    return (
      <Ul>
        {this.renderHistory()}
      </Ul>
    );
  }
}

CommitHistory.propTypes = {
  getHistory: PropTypes.func.isRequired,
  commits: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    commits: state.history.commits,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getHistory,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CommitHistory);
export {
  CommitHistory,
  mapStateToProps,
};
