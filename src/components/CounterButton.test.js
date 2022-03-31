import React from 'react';
import CounterButton from './CounterButton';
import { shallow, mount } from 'enzyme/build';

it('render whitout crash', ()=>{
    const mockColor = 'red';
    expect(shallow(<CounterButton color = {mockColor}></CounterButton>)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} ></CounterButton>);
    
    expect(wrapper.state()).toEqual({count: 0});

    wrapper.find('[id="counter"]').simulate('click')
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({count: 2});
    wrapper.find('[id="counter"]').simulate('keypress')
    expect(wrapper.state()).toEqual({count: 2});
    expect(wrapper.props().color).toEqual('red')

});

