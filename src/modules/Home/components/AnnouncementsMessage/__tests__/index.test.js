import React from 'react';
import renderer from 'react-test-renderer'

import AnnouncementsMessage from '../index';

describe('AnnouncementsMessage', () => {
  test('AnnouncementsMessage renders without crashing', () => {
    const tree = renderer.create(
      <AnnouncementsMessage />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})