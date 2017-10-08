import React from 'react';
import { shallow } from 'enzyme';
import CommitsGroup from './CommitsGroup';

describe('Commits group component', () => {
  it('Must render an empty list', () => {
    const wrapper = shallow(<CommitsGroup commits={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Must render list of commits', () => {
    const commits = [
      {
        _id: '59d678d9f51fea02ea1209b7',
        date: new Date('2016-06-04'),
        title: 'A title',
        description: 'Description...',
        image: 'https://avatars0.githubusercontent.com/u/4216535?v=4&s=72',
        hash: 'd9094385acf7d47c7c5c6f7ceb6866b54f9b602d',
        hashAlias: 'd909438',
      },
    ];
    const wrapper = shallow(<CommitsGroup commits={commits} />);
    expect(wrapper).toMatchSnapshot();
  });
});
