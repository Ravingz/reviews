import React from 'react';
import { shallow } from 'enzyme/build';
import App from '../client/src/components/App.jsx';


describe('unit test for app', () => {
  
  test('should render app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  test('should invoke getReviews on componentDidMount', () => {
    const wrapper = shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().getReviews = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
  });

});