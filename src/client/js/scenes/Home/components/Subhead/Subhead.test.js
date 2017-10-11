import React from 'react';
import { shallow } from 'enzyme';
import { Subhead, mapStateToProps } from './Subhead';

describe('Subhead component', () => {
  it('Must render the subhead with no link and zero stars', () => {
    const wrapper = shallow(
      <Subhead repo="" totalStars={0} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Must render the subhead with a link and some stars', () => {
    const wrapper = shallow(
      <Subhead repo="sample.com" totalStars={50} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('Subhead mapStateToProps function', () => {
    it('Must return an object with an empty "repo" string and 0 for "totalStars"', () => {
      const defaultState = {
        about: {
          repository: '',
          githubStars: 0,
        },
      };
      const result = mapStateToProps(defaultState);
      const expected = {
        repo: '',
        totalStars: 0,
      };
      expect(result).toEqual(expected);
    });

    it('Must return an object with an empty "repo" string and 0 for "totalStars"', () => {
      const defaultState = {
        about: {
          repository: 'sample.com',
          githubStars: 10,
        },
      };
      const result = mapStateToProps(defaultState);
      const expected = {
        repo: 'sample.com',
        totalStars: 10,
      };
      expect(result).toEqual(expected);
    });
  });
});
