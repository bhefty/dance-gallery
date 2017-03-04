import React from 'react';
import renderer from 'react-test-renderer'

import WelcomeMessage from '../index';

describe('WelcomeMessage', () => {
  test('WelcomeMessage renders without crashing', () => {
    const tree = renderer.create(
      <WelcomeMessage />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})