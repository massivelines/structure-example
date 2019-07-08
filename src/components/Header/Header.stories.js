import React from 'react';
import { storiesOf } from '@storybook/react';

import { mockDataBasic, mockDataMore } from './mockData';

import Header from './Header';

// This is just an example of different ways to use header, storiesOf would normally only be called once
storiesOf('Component|Header', module).add('default', () => (
  <Header bodyText={mockDataBasic.bodyText} linkText={mockDataBasic.linkText} />
));

storiesOf('Component|Another Level/Header', module).add('default', () => (
  <Header bodyText={mockDataMore.bodyText} linkText={mockDataMore.linkText} />
));