import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('Link component', () => {
  it('Must render properly', () => {
    const container = shallow(
      <Link url="sample">
        Sample
      </Link>,
    );

    expect(container).toMatchSnapshot();
  });
});
