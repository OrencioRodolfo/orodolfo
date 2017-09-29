import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container component', () => {
  it('Must render an empty container', () => {
    const wrapper = shallow(
      <Container />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Must render a non empty container', () => {
    const wrapper = shallow(
      <Container>
        <p>Some content</p>
      </Container>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
