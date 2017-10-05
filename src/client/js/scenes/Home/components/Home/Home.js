/* global fetch */
import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAbout } from '../../../../actions';
import { media } from '../../../../theme/style-utils';
import RestrictedContainer from '../../../../components/Containers/Restricited/Restricited';
import Header from '../Header/Header';
import Subhead from '../Subhead/Subhead';
import CommitHistory from '../CommitHistory/CommitHistory';
import Footer from '../Footer/Footer';

const HomeContainer = styled.div`
  font-family: ${props => props.theme.fontFamily('primary')};
  display: flex;
  flex-direction: column;
  height: 100%;

  .grow {
    flex-grow: 1;
  }
`;

const Desc = styled.p`
  ${media.phone`
    display: none;
  `}
`;


class Home extends Component {
  componentDidMount() {
    fetch(`${API_URL}/about`)
      .then(response => response.json())
      .then((response) => {
        this.props.getAbout(response);
      });
  }

  render() {
    return (
      <HomeContainer>
        <Header />
        <Subhead />
        <RestrictedContainer className="grow">
          <Desc>{this.props.description}</Desc>
          <CommitHistory />
        </RestrictedContainer>
        <Footer />
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  getAbout: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAbout,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    description: state.about ? state.about.description : '',
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);

export {
  Home,
};
