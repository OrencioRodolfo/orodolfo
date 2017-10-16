import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
  padding: 10px;
  margin: 0;
`;

const Li = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 0;
  margin: 15px 0;
  list-style: none;
`;

const Title = styled.div`
  ${props => props.theme.textSetting('md')};
  font-weight: ${props => props.theme.weight('semiBold')};
`;

const Description = styled.div`
  ${props => props.theme.textSetting('sm')};
  color: ${props => props.theme.contrast('light', 'secondary')};
`;

const Img = styled.img`
  width: 120px;
  padding: 15px;
  padding-left: 0;
`;

class Organizations extends Component {
  renderOrganizations() {
    return this.props.organizations.map(organization => (
      <Li key={organization.name}>
        <Img src={organization.image} alt={organization.name} />
        <div>
          <Title>{organization.name}</Title>
          <Description>{organization.description}</Description>
        </div>
      </Li>
    ));
  }

  render() {
    return (
      <Ul>
        {this.renderOrganizations()}
      </Ul>
    );
  }
}

Organizations.propTypes = {
  organizations: PropTypes.array.isRequired,
};

function mapStateToProps({ organizations }) {
  return {
    organizations,
  };
}

export default connect(mapStateToProps)(Organizations);
export {
  Organizations,
  mapStateToProps,
};
