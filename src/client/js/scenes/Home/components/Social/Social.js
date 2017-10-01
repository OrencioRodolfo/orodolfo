import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from '../../../../components/Icon/Icon';
import Link from '../../../../components/Link/Link';

const Wrapper = styled.div`
  > a {
    margin: 0 10px;
  }
  > a:last-child {
    margin: 0;
  }
`;

class Social extends Component {
  renderListItem() {
    return this.props.social.map(social => (
      <Link key={social.network} url={social.url}>
        <Icon icon={`${social.network} fa-2x`} />
      </Link>
    ));
  }

  render() {
    return (
      <Wrapper>
        {this.renderListItem()}
      </Wrapper>
    );
  }
}

Social.propTypes = {
  social: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    social: state.about ? state.about.social : [],
  };
}

export default connect(mapStateToProps)(Social);
