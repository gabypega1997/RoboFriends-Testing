import React from "react";

import { shallow, mount } from "enzyme/build";
import MainPage from './MainPage'

let wrapper ,wrapper2, wrapper3;
beforeEach(()=>{
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots:[],
        searchField:'',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
})


describe('App container',()=>{
    it('expect to render App component', () => {
        expect(wrapper).toMatchSnapshot();
    }),
    it('filters robots correctly', () => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots:[{
                id:3,
                name:'John',
                email:'john@gmail.com'
            }],
            searchField:'john',
            isPending: false
        }
        wrapper2 = shallow(<MainPage {...mockProps}/>)
        expect(wrapper.instance().filteredRobots([])).toEqual([])
        expect(wrapper2.instance().filteredRobots([])).toEqual([
            {
                id:3,
                name:'John',
                email:'john@gmail.com'
            }
        ])
    })
})

describe('Is Pending is True', () => { 
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots:[{
            id:3,
            name:'John',
            email:'john@gmail.com'
        }],
        searchField:'john',
        isPending: true
    }
    wrapper3 = shallow(<MainPage {...mockProps}/>)
    expect(wrapper3.instance().render()).toEqual(<h1>Loading</h1>);
})


