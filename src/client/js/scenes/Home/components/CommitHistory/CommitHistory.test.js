import React from 'react';
import { shallow } from 'enzyme';
import { CommitHistory, mapStateToProps } from './CommitHistory';

describe('Commit history component', () => {
  const commits = {
    2016: [
      {
        _id: '59d678d9f51fea02ea1209b7',
        date: '2016-06-04T23:00:00.000Z',
        title: 'A title',
        description: 'Description...',
        image: 'https://avatars0.githubusercontent.com/u/4216535?v=4&s=72',
        hash: 'd9094385acf7d47c7c5c6f7ceb6866b54f9b602d',
        hashAlias: 'd909438',
      },
    ],
    2015: [
      {
        _id: '59d678d9f51fea02ea1209b7',
        date: '2015-06-04T23:00:00.000Z',
        title: 'A title',
        description: 'Description...',
        image: 'https://avatars0.githubusercontent.com/u/4216535?v=4&s=72',
        hash: 'd9094385acf7d47c7c5c6f7ceb6866b54f9b602d',
        hashAlias: 'd909438',
      },
    ],
  };

  it('Must render an empty list properly', () => {
    const container = shallow(
      <CommitHistory commits={{}} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Must render a list of commits', () => {
    const wrapper = shallow(
      <CommitHistory commits={commits} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('Commit history mapStateToProps function', () => {
    it('Must return an object with an empty "commits" property', () => {
      const defaultState = { history: { commits: {} } };
      const result = mapStateToProps(defaultState);
      const expected = { commits: {} };
      expect(result).toEqual(expected);
    });

    it('Must map the state "commits" to the component\'s properties', () => {
      const result = mapStateToProps({ history: { commits } });
      const expected = {
        commits,
      };
      expect(result).toEqual(expected);
    });
  });
});
