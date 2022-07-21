import React from "react";
import Card from "./Card";
import { shallow, mount, render } from 'enzyme';


it("expect to render Card component", () => {
    
    expect(shallow(<Card/>)).toMatchSnapshot();

})
