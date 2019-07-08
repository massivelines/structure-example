import React from 'react';
import { shallow, mount } from 'enzyme';
import initStoryshots from '@storybook/addon-storyshots';
import Header from './Header';

import { mockDataBasic, mockDataMore } from './mockData';

describe('<Header />', () => {
  // Test Snapshot
  //  !Not setup yet
  //   it('render correctly', () => {
  //     const HeaderComponent = renderer.create(<Header />).toJSON();
  //     expect(HeaderComponent).toMatchSnapshot();
  //   });

  //   Test Props
  it('checks correct props are displayed', () => {
    const { bodyText, linkText, buttonText } = mockDataBasic;

    const HeaderComponent = mount(<Header {...mockDataBasic} />);

    expect(HeaderComponent.prop('bodyText')).toEqual(bodyText);
    expect(HeaderComponent.prop('linkText')).toEqual(linkText);
    expect(HeaderComponent.prop('buttonText')).toEqual(buttonText);
  });

  it('checks rendered correctly with null value props', () => {
    const props = {
      bodyText: null,
      linkText: null,
      buttonText: null,
    };

    const HeaderComponent = mount(<Header {...props} />);

    expect(HeaderComponent.prop('bodyText')).toEqual(null);
    expect(HeaderComponent.prop('linkText')).toEqual(null);
    expect(HeaderComponent.prop('buttonText')).toEqual(null);
  });

  // Test prop types
  //   !Wont work with cra, jest-extended
  //   it('check the type of passed props', () => {
  //     const HeaderComponent = mount(<Header {...mockDataBasic} />);
  //     expect(HeaderComponent.prop('bodyText')).toBeString();
  //     expect(HeaderComponent.prop('linkText')).toBeString();
  //     expect(HeaderComponent.prop('buttonText')).toBeString();
  //   });

  // Test Button
  //
});
