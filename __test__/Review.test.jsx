import React from 'react';
import { shallow } from 'enzyme/build';
import Review from '../client/src/components/Review.jsx';

const sampleReview = {
  "review_id":874,
  "rating":3,
  "comment":"Quo deserunt voluptatem. Repellendus enim ab voluptatem facere. At necessitatibus impedit et quo voluptatem ut porro.",
  "date":"2020-03-09T07:00:00.000Z",
  "username":"Stevie.Lowe",
  "usercity":"Americaland, Kentucky",
  "restuarant_id":75
};

describe('Render Tests', () => {
  test('should render user component', () => {
    const wrapper = shallow(
      <Review review={sampleReview} />
    );
    expect(wrapper.find('.comment').text()).toBe("Quo deserunt voluptatem. Repellendus enim ab voluptatem facere. At necessitatibus impedit et quo voluptatem ut porro.");
  });

});