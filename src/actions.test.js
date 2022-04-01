import * as actions from "./actions";
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constance";

import configureStore from 'redux-mock-store';
import thunkMiddleware from "redux-thunk"
import { configure } from "enzyme/build";
import thunk from "redux-thunk";

// const mockStore = configureStore([thunkMiddleware])

describe('search field', () => { 
    const text = "woo"
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    it('should cerate an actions to search robots', () => {
        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})



// describe('request robots Api', () => { 

//     // store.dispatch( actions.requestRobots()).then( () => {
//     //     const action = store.getActions();
//     //     const expectedAction = {
//     //         type: REQUEST_ROBOTS_PENDING
//     //     }
//     //     console.log(action)
//     //     it('handle requesting robots API', () => {
//     //         expect(action[0]).toEqual(expectedAction)
//     //         expect(action[1]).toEqual(REQUEST_ROBOTS_SUCCESS)
            
//     //     })
    
//     // });

    
// })

let store, mockStore;

beforeEach(()=>{
    mockStore = configureStore([thunk])
    store = mockStore({}) 
})

describe('request RobotsActions', () => {
    it('Should be pending and fail tha fetch call', async () => {
        expect.assertions(2);
        
        await store.dispatch(actions.requestRobots());
        const action = store.getActions();

        expect(action[0].type).toEqual(REQUEST_ROBOTS_PENDING);
        expect(action[1].type).toEqual(REQUEST_ROBOTS_SUCCESS);
    })
})


