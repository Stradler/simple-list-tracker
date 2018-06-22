import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import App from './App';

describe("Test suite for App component", function(){
    it("only one element in App class", function(){
        const wrapper = shallow(<App />);
        expect(wrapper.find(".App")).length(1);
    });
});