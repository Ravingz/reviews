import React from 'react';
import { shallow, mount } from 'enzyme';
import SetRating from '../client/src/components/SetRating.jsx';
import Star from '../client/src/components/Star.jsx';

describe('Render Stars', () => {
  test('should render 5 Star components', () => {
    const wrapper = shallow(
      <SetRating />
    );
    expect(wrapper.find(Star)).toHaveLength(5);
  });
});

describe('Set Ratings', () => {
  test('should invoke the onclick prop when the star is clicked', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <Star
        onClick={mockClick}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
    );
    const starButton = wrapper.find('li');
    starButton.simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });

  
  test('should invoke the onMouseEnter prop when the star is hovered', () => {
    const mockMouseEnter = jest.fn();
    const wrapper = shallow(
      <Star
        onClick={() => {}}
        onMouseEnter={mockMouseEnter}
        onMouseLeave={() => {}}
      />
    );
    const star = wrapper.find('li');
    star.simulate('mouseenter');
    expect(mockMouseEnter).toHaveBeenCalled();
  });
  

});
