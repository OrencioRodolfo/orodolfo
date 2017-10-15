import React from 'react';
import { shallow } from 'enzyme';
import { Navigation, mapStateToProps } from './Navigation';

describe('Navigation component', () => {
  it('Must render a navigation with the totals', () => {
    const container = shallow(
      <Navigation totalCommits={31} />,
    );

    expect(container).toMatchSnapshot();
  });

  describe('mapStateToProps function', () => {
    it('Must return an object with no totals', () => {
      const defaultState = {
        history: {
          commits: {},
        },
      };
      const result = mapStateToProps(defaultState);
      const expected = {
        totalCommits: 0,
      };
      expect(result).toEqual(expected);
    });
    it('Must return an object with 6 commits as total', () => {
      const state = {
        history: {
          commits: {
            2015: [
              {},
              {},
              {},
            ],
            2016: [
              {},
            ],
            2017: [
              {},
              {},
            ],
          },
        },
      };
      const result = mapStateToProps(state);
      const expected = {
        totalCommits: 6,
      };
      expect(result).toEqual(expected);
    });
  });
});
