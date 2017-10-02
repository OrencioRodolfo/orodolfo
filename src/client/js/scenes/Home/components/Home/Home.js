/* global fetch */
import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAbout } from '../../../../actions';
import RestrictedContainer from '../../../../components/Containers/Restricited/Restricited';
import Header from '../Header/Header';
import Subhead from '../Subhead/Subhead';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const HomeContainer = styled.div`
  font-family: ${props => props.theme.fontFamily('primary')};
  display: flex;
  flex-direction: column;
  height: 100vh;
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
        <RestrictedContainer>
          <p>{this.props.description}</p>
          <Navigation />
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
