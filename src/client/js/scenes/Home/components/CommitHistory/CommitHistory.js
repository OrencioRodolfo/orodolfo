/* global fetch */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CommitsGroup from './CommitsGroup/CommitsGroup';
import { getHistory } from '../../../../actions';
import { media } from '../../../../theme/style-utils';

const Title = styled.div`
  padding: 7px 0;
  color: ${props => props.theme.contrast('light', 'secondary')};
  ${props => props.theme.textSetting('nr')};
  
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
  componentWillMount() {
    fetch(`${API_URL}/commit`)
      .then(response => response.json())
      .then((response) => {
        this.props.getHistory(response);
      });
  }

  renderHistory() {
    const years = Object.keys(this.props.commits).reverse();

    return years.map(year => (
      <div key={year}>
        <Title><span>Commits on </span>{year}</Title>
        <CommitsGroup commits={this.props.commits[year]} />
      </div>
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
  getHistory: PropTypes.func.isRequired,
  commits: PropTypes.object.isRequired,
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
