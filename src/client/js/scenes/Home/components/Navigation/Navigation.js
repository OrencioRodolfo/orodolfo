import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RoundedContainer from '../../../../components/Containers/Rounded/Rounded';
import Icon from '../../../../components/Icon/Icon';

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const Item = styled.li`
  display: inline-block;
  margin: 0;
  padding: 10px;
`;

const Stat = styled.span` 
  font-weight: ${props => props.theme.weight('semiBold')};
  margin: 0 5px;
`;

class Navigation extends Component {
  render() {
    return (
      <RoundedContainer>
        <List>
          <Item>
            <Link to="/commits">
              <Icon icon="clock-o" />
              <Stat>21</Stat>
              commits
            </Link>
          </Item>
          <Item>
            <Link to="/organizations">
              <Icon icon="users" />
              <Stat>3</Stat>
              organizations
            </Link>
          </Item>
          <Item>
            <Link to="/repos">
              <Icon icon="github-alt" />
              <Stat>5</Stat>
              repos
            </Link>
          </Item>
        </List>
      </RoundedContainer>
    );
  }
}

export default Navigation;
