import React from 'react';
import { shallow } from 'enzyme';
import { Social, mapStateToProps } from './Social';

describe('Social icons component', () => {
  const social = [
    {
      network: 'facebook',
      url: 'https://www.facebook.com/orenciorodolfo',
    },
    {
      network: 'linkedin',
      url: 'https://www.linkedin.com/in/rodolfo-goncalves',
    },
  ];

  it('Must render an empty list properly', () => {
    const wrapper = shallow(
      <Social social={[]} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Must render a list of social links with icons', () => {
    const wrapper = shallow(
      <Social social={social} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('Social mapStateToProps function', () => {
    it('Must return an object with an empty "social" property', () => {
      const defaultState = {
        about: {
          social: [],
        },
      };
      const result = mapStateToProps(defaultState);
      const expected = {
        social: [],
      };
      expect(result).toEqual(expected);
    });

    it('Must map the state "social" to the component\'s properties', () => {
      const result = mapStateToProps({ about: { social } });
      const expected = {
        social,
      };
      expect(result).toEqual(expected);
    });
  });
});
