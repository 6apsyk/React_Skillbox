/**
 * @jest-environment jsdom
 */
// @jest-environment jsdom - для обращения к объекту window и т.д.

import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Dropdown } from "../Dropdown";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Dropdown", () => {
    test("should render", () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find("div.container").isEmptyRender()).toBeFalsy();
    });
    test("should render (snapshot)", () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);
        expect(wrapper).toMatchSnapshot();
    });
});
