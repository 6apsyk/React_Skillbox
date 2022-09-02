import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Dropdown } from "../Dropdown";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Dropdown", () => {
    test("should render", () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find("#button")).toBeDefined();
    });
});
