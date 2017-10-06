/* global fetch */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommitsGroup from './CommitsGroup/CommitsGroup';
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
    const years = Object.keys(this.props.commits).reverse();

    return years.map(year => (
      <div key={year}>
        <p>{year}</p>
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
