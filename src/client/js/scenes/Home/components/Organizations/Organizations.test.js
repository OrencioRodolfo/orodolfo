import React from 'react';
import { shallow } from 'enzyme';
import { Organizations, mapStateToProps } from './Organizations';

describe('Organization component', () => {
  it('Must render properly', () => {
    const container = shallow(
      <Organizations organizations={[]} />,
    );

    expect(container).toMatchSnapshot();
  });

  describe('mapStateToProps function', () => {
    it('Must return an object with no organizations', () => {
      const defaultState = {
        organizations: [],
      };
      const result = mapStateToProps(defaultState);
      const expected = {
        organizations: [],
      };
      expect(result).toEqual(expected);
    });

    it('Must return an object with organizations', () => {
      const organizations = [{}, {}, {}];
      const defaultState = {
        organizations,
      };
      const result = mapStateToProps(defaultState);
      const expected = {
        organizations,
      };
      expect(result).toEqual(expected);
    });
  });
});
