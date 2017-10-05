import React, { Component } from 'react';
import styled from 'styled-components';
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
            <Icon icon="clock-o" />
            <Stat>21</Stat>
            commits
          </Item>
          <Item>
            <Icon icon="users" />
            <Stat>3</Stat>
            organizations
          </Item>
          <Item>
            <Icon icon="github-alt" />
            <Stat>5</Stat>
            repos
          </Item>
        </List>
      </RoundedContainer>
    );
  }
}

export default Navigation;
