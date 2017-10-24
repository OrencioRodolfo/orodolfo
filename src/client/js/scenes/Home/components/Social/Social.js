import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { media } from '../../../../theme/style-utils';
import Icon from '../../../../components/Icon/Icon';
import Link from '../../../../components/Link/Link';

const Wrapper = styled.div`
  > a {
    margin: 0 10px;
    
    ${media.phone`
      display: inline-block;
      width: 45px;
      text-align: center;
    `}
  }
  > a:last-child {
    margin-right: 0;
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
    social: state.about.social,
  };
}

export default connect(mapStateToProps)(Social);

export {
  mapStateToProps,
  Social,
};
