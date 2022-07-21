import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constance";

import * as reducers from './reducer';

describe('searchRobots', () => { 
    const initialStateSearch = {
        searchField:""
    }
    it('should retrn the initial state', () => {
        expect(reducers.searchRobots(undefined,{})).toEqual({searchField:''})
    })
    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initialStateSearch,{
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField:"abc"
        })
    })
})


describe('requestRobots', () => { 
    const initialStateRobots = {
        isPending:false,
        robots:[],
        error:""
    }
    it('should retrn the initial state', () => {
        expect(reducers.requestRobots(undefined,{})).toEqual(initialStateRobots)
    })

    it('schould handle REQUEST_ROBOTS_PENDING action', () => {

        expect(reducers.requestRobots(initialStateRobots,{
            type: REQUEST_ROBOTS_PENDING,
            payload: {isPending:true}
        })).toEqual({
            isPending:true,
        })

    })
    it('schould handle REQUEST_ROBOTS_Success action', () => {

        expect(reducers.requestRobots(initialStateRobots,{
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id:'123',
                name:'test',
                email:'test@gmail.com'
            }]
        })).toEqual({
            isPending:false,
            robots:[{
                id:'123',
                name:'test',
                email:'test@gmail.com'
            }],
            error:''
        })

    })
    
    it('schould handle REQUEST_ROBOTS_Failded action', () => {

        expect(reducers.requestRobots(initialStateRobots,{
            type: REQUEST_ROBOTS_FAILED,
            payload: "NOOOOO!"
        })).toEqual({
            error: "NOOOOO!",
            isPending: false, 
        })

    })
})
