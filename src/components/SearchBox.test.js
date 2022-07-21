import React from "react";
import { shallow } from "enzyme/build";
import SearchBox from "./SearchBox";

let wrapper;
describe("Render SearchBox Component", () => {
  const mockFunktions = {
    searchfield: jest.fn(),
    searchChange: jest.fn(),
  };
  wrapper = shallow(<SearchBox {...mockFunktions} />);

  // it('SearchBox schnapshot',()=>{
  //     expect(wrapper).toMatchSnapshot();
  // })
});
