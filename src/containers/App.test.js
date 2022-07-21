import React from "react";

import { shallow, mount } from "enzyme/build";
import App from "./App"
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer'
import { Provider } from "react-redux";


const mockStore = configureStore([]);

describe('My Conection React-Redux',()=>{
    let store;
    let component;
    
    beforeEach(() => {
        store = mockStore({ 
            searchRobots:{
                searchField:"",
            },       
            requestRobots:{
                isPending:false,
                robots:[],
                error:""
            }  
                
            
    });

    store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    });
    
    it("connection to App container", () => {
        expect (component.toJSON()).toMatchSnapshot();
    })
})



// //Andrei Solution


// describe('App container',()=>{
//     it('expect to render App component', () => {
//         const mockStore = {
//             robots:[],
//             searchField: ''
//         }
//         expect(shallow(<App store={mockStore}/>)).toMatchSnapshot()
//     })
// })



