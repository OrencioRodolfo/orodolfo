import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../../../../theme/style-utils';
import RestricitedContainer from '../../../../components/Containers/Restricited/Restricited';
import Button from '../../../../components/Button/Button';
import PillLeft from '../../../../components/Button/PillLeft/PillLeft';
import PillRight from '../../../../components/Button/PillRight/PillRight';
import Icon from '../../../../components/Icon/Icon';
import Link from '../../../../components/Link/Link';

const Wrapper = styled.div`
  padding: 30px 0;
  background-color: ${props => props.theme.color('background', 'lighter')};
  
  ${media.phone`
    position: relative;
    padding: 15px 0;
    background-color: ${props => props.theme.color('foreground')};
    color: ${props => props.theme.contrast('dark')};
  `}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    justify-content: center;
    color: ${props => props.theme.contrast('dark')};
  `}
    
  button {
    ${media.phone`
      display: none;
    `}  
  }
  
  i.fa-book {
    margin-right: 5px;
    color: ${props => props.theme.contrast('light', 'secondary')};
  }

  i.fa-book,
  .link {
    ${props => props.theme.textSetting('md')};

    ${media.phone`
      color: ${props => props.theme.contrast('dark')};
      ${props => props.theme.textSetting('nr')};
    `}
  }  
`;

class Subhead extends Component {
  render() {
    return (
      <Wrapper>
        <RestricitedContainer>
          <Container>
            <div>
              <Icon icon="book" />
              <Link url={this.props.repo} className="link">OrencioRodolfo / <b>orodolfo</b></Link>
            </div>
            <Link url="https://github.com/OrencioRodolfo">
              <Button alt="Github stars" title="Github stars">
                <PillLeft>
                  <Icon icon="star" />
                  Stars
                </PillLeft>
                <PillRight>{this.props.totalStars}</PillRight>
              </Button>
            </Link>
          </Container>
        </RestricitedContainer>
      </Wrapper>
    );
  }
}

Subhead.propTypes = {
  repo: PropTypes.string.isRequired,
  totalStars: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    repo: state.about.repository,
    totalStars: state.about.githubStars,
  };
}

export default connect(mapStateToProps)(Subhead);

export {
  Subhead,
  mapStateToProps,
};
