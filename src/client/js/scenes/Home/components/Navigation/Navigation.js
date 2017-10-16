import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../../../../components/Icon/Icon';
import { media } from '../../../../theme/style-utils';

const RoundedContainer = styled.div`
  border-radius: 3px;
  border: 1px solid ${props => props.theme.color('background')};
  margin: 20px 0;
  border-bottom: 3px solid ${props => props.theme.color('accent')};
  
  ${media.phone`
    margin: 0;  
  `}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const Item = styled.li`
  display: inline-block;
  margin: 0;
  padding: 10px;

  a {
    text-decoration: none;
    color: ${props => props.theme.contrast('light')}
  }

  ${media.phone`
    a {
      display: flex;
      align-items: center;

      span {
        order: 1;
        padding: 5px;
        border-radius: 50%;
        background-color: ${props => props.theme.color('foreground')};
        color: ${props => props.theme.contrast('dark')};
        ${props => props.theme.textSetting('xs')};
        width: 15px;
        height: 15px;
        line-height: 15px;
        text-align: center;
      }
      
      i {
        display: none;
      }
    }
  `}

  .active {
    color: ${props => props.theme.color()};
  }
`;

const Stat = styled.span` 
  font-weight: ${props => props.theme.weight('semiBold')};
  margin: 0 5px;
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 0,
      links: [
        {
          url: '/commits',
          icon: 'clock-o',
          stat: 0,
          desc: 'commits',
          active: true,
        },
        {
          url: '/orgs',
          icon: 'users',
          stat: 0,
          desc: 'organizations',
        },
      ],
    };
  }

  componentWillMount() {
    const currentRoute = window.location.href.replace(/.*((:[0-9])*|(.*.com))\//, '/');
    const currentItemIndex = this.state.links.findIndex(item => item.url === currentRoute);

    this.setState({
      activeLink: currentItemIndex >= 0 ? currentItemIndex : 0,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      links: [
        {
          url: '/commits',
          icon: 'clock-o',
          stat: nextProps.totalCommits,
          desc: 'commits',
          active: true,
        },
        {
          url: '/orgs',
          icon: 'users',
          stat: nextProps.totalOrganizations,
          desc: 'organizations',
        },
      ],
    });
  }

  setActiveLink(id) {
    this.setState({
      activeLink: id,
    });
  }

  renderLinks() {
    if (this.state.links) {
      return this.state.links.map((item, index) => (
        <Item key={item.url}>
          <Link
            to={item.url}
            className={index === this.state.activeLink ? 'active' : ''}
            onClick={() => this.setActiveLink(index)}
          >
            <Icon icon={item.icon} />
            <Stat>{item.stat}</Stat>
            {item.desc}
          </Link>
        </Item>
      ));
    }

    return null;
  }

  render() {
    return (
      <RoundedContainer>
        <List>
          {this.renderLinks()}
        </List>
      </RoundedContainer>
    );
  }
}

Navigation.propTypes = {
  totalCommits: PropTypes.number.isRequired,
  totalOrganizations: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  const { commits } = state.history;
  let commitsCounter = 0;
  Object.keys(commits).forEach((key) => {
    commitsCounter += commits[key].length || 0;
  });

  return {
    totalCommits: commitsCounter,
    totalOrganizations: state.organizations.length,
  };
}

export default connect(mapStateToProps)(Navigation);

export {
  Navigation,
  mapStateToProps,
};
