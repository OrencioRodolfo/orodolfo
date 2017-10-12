import React from 'react';
import { shallow } from 'enzyme';
import Commit from './Commit';

describe('Commit component', () => {
  it('Must render an empty list', () => {
    const wrapper = shallow(<Commit commit={{}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Must render the details of a commits', () => {
    const commit = {
      _id: '59d678d9f51fea02ea1209b7',
      date: new Date('2016-06-04'),
      title: 'A title',
      description: 'Description...',
      image: 'https://avatars0.githubusercontent.com/u/4216535?v=4&s=72',
      link: 'sample.com',
    };
    const wrapper = shallow(<Commit commit={commit} />);
    expect(wrapper).toMatchSnapshot();
  });
});
