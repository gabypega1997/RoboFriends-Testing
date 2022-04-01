import React from "react";
import { shallow } from "enzyme/build";
import Scroll from "./Scroll";
import CardList from './CardList';

let wrapper;
describe("Render Scroll Component", () => {
    const mockProps = {
        children:CardList
    }
    wrapper = shallow(<Scroll {...mockProps}/>)
    it("Scroll snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    })
})