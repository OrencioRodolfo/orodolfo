/* global fetch */
/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHistory } from '../../../../actions';

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
      <li key={commit._id}>{commit.title}</li>
    ));
  }

  render() {
    return (
      <ul>
        {this.renderHistory()}
      </ul>
    );
  }
}

CommitHistory.propTypes = {
  getHistory: PropTypes.func.isRequired,
  commits: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    commits: state.history ? state.history.commits : [],
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
