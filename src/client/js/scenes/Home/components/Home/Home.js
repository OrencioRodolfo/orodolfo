import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { getAbout, getOrganizations, getHistory } from '../../../../actions';
import { media } from '../../../../theme/style-utils';
import Header from '../Header/Header';
import Subhead from '../Subhead/Subhead';
import Navigation from '../Navigation/Navigation';
import CommitHistory from '../CommitHistory/CommitHistory';
import Organizations from '../Organizations/Organizations';
import Footer from '../Footer/Footer';
import { fetchAbout } from '../../services/about';
import { fetchOrganizations } from '../../services/organizations';
import { fetchHistory } from '../../services/history';

const HomeContainer = styled.div`
  font-family: ${props => props.theme.fontFamily('primary')};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainContent = styled.div`
  max-width: 1012px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  margin: 0 auto;
  flex-grow: 1;

  ${media.phone`
    padding: 0;
  `}
`;

const Desc = styled.p`
  ${props => props.theme.textSetting('nr')};

  ${media.phone`
    display: none;
  `}
`;

class Home extends Component {
  componentDidMount() {
    fetchAbout().then((response) => {
      this.props.getAbout(response);
    });
    fetchOrganizations().then((response) => {
      this.props.getOrganizations(response);
    });
    fetchHistory().then((response) => {
      this.props.getHistory(response);
    });
  }

  render() {
    return (
      <HomeContainer>
        <Header />
        <Subhead />
        <Router>
          <div>
            <MainContent>
              <Desc>{this.props.description}</Desc>
              <Navigation />
              <Route exact path="/" component={CommitHistory} />
              <Route exact path="/commits" component={CommitHistory} />
              <Route exact path="/orgs" component={Organizations} />
              <Route exact path="/repos" component={CommitHistory} />
            </MainContent>
          </div>
        </Router>
        <Footer />
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  getAbout: PropTypes.func.isRequired,
  getOrganizations: PropTypes.func.isRequired,
  getHistory: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAbout,
    getOrganizations,
    getHistory,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    description: state.about.description,
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);

export {
  Home,
};
