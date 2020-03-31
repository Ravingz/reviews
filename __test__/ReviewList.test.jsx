import React from 'react';
import { shallow } from 'enzyme/build';
import ReviewList from '../client/src/components/ReviewList.jsx';
import Review from '../client/src/components/Review.jsx';

const sampleReviews = [
  {
    "review_id":874,
    "rating":3,
    "comment":"Quo deserunt voluptatem. Repellendus enim ab voluptatem facere. At necessitatibus impedit et quo voluptatem ut porro.",
    "date":"2020-03-09T07:00:00.000Z",
    "username":"Stevie.Lowe",
    "usercity":"Americaland, Kentucky",
    "restuarant_id":75
  },{
    "review_id":2870,
    "rating":3,
    "comment":"Iusto consequatur assumenda in. Delectus numquam sed vel officia sunt tenetur sit. Amet dolores omnis laboriosam dolores qui recusandae magni sequi. Aut veritatis voluptatibus ipsam. Placeat molestias voluptas veritatis nemo labore eos.",
    "date":"2020-03-05T08:00:00.000Z",
    "username":"Barney84",
    "usercity":"Handfort, California",
    "restuarant_id":18
  },{
    "review_id":1217,
    "rating":5,
    "comment":"Nam repellat vel. Soluta ut ut. Velit dolorem adipisci. Excepturi animi nesciunt. Sit itaque autem delectus molestiae omnis nihil velit voluptatum.",
    "date":"2020-03-03T08:00:00.000Z",
    "username":"Mikel.Baumbach49",
    "usercity":"Lake Avery, Florida",
    "restuarant_id":28
  }
]

test('should render 3 sampleReviews components', () => {
  const wrapper = shallow(
    <ReviewList reviews={sampleReviews} />
  );
  expect(wrapper.find(Review)).toHaveLength(3);
});