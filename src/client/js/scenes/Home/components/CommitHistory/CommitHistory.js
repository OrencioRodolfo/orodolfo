
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CommitsGroup from '../CommitsGroup/CommitsGroup';
import { media } from '../../../../theme/style-utils';
import Icon from '../../../../components/Icon/Icon';

const CommitListing = styled.div`
  position: relative;
  
  &::before {
    position: absolute;
    top: 10px;
    bottom: -10px;
    left: 0;
    z-index: -1;
    display: block;
    width: 1px;
    content: "";
    background-color: ${props => props.theme.color('background')};
    margin-top: 20px;
    
    ${media.phone`
      display: none;
    `}
  }

  &:last-child ul {
    ${media.phone`
      border-bottom: 0;
    `}
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  
  ${media.phone`
    padding-left: 0;
  `}

  i.fa-circle-o {
    position: absolute;
    left: -6px;
    color: ${props => props.theme.color('background')};

    ${media.phone`
      display: none;
    `}
  }
`;

const Title = styled.div`
  padding: 7px 0;
  color: ${props => props.theme.contrast('light', 'secondary')};
  flex-grow: 1;
  ${props => props.theme.textSetting('sm')};
  
  ${media.phone`
    padding: 7px 15px;
    font-weight: ${props => props.theme.weight('semiBold')};
    background-color: ${props => props.theme.color('background', 'light')};
    ${props => props.theme.textSetting('sm')};
  `}

  span {
    ${media.phone`
      display: none;
    `}
  }
`;

class CommitHistory extends Component {
  renderHistory() {
    const years = Object.keys(this.props.commits).reverse();

    return years.map(year => (
      <CommitListing key={year}>
        <Head>
          <Icon icon="circle-o" />
          <Title><span>Commits on </span>{year}</Title>
        </Head>
        <CommitsGroup commits={this.props.commits[year]} />
      </CommitListing>
    ));
  }

  render() {
    return (
      <div>
        {this.renderHistory()}
      </div>
    );
  }
}

CommitHistory.propTypes = {
  commits: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    commits: state.history.commits,
  };
}

export default connect(mapStateToProps)(CommitHistory);
export {
  CommitHistory,
  mapStateToProps,
};
