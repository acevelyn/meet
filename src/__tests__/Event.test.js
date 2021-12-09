import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event />, component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]}/>);
    });
    test('render main Event element in component', () => {
        expect(EventWrapper.find('.Event')).toHaveLength(1);
    })
    test('render summary element in component', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    })
    test('render start date element in component', () => {
        expect(EventWrapper.find('.start-date')).toHaveLength(1);
    })
    test('render location element in component', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    })
    test('render show-details button in component', () => {
        expect(EventWrapper.find('.toggleEvent')).toHaveLength(1);
    })
    test('confirming default state of collapsed is true', () => {
        expect(EventWrapper.state('collapsed')).toBe(true);
    })
    test('change collapsed state when button is clicked', () => {
        EventWrapper.find('.toggleEvent').simulate('click')
        expect(EventWrapper.state('collapsed')).toBe(false)
    })
    test('if collapsed state is false, event details are displayed', () => {
        EventWrapper.setState({ collapsed: false })
        expect(EventWrapper.find('.more-details')).toHaveLength(1);
    })
    test('if collapsed state is true, event details are hidden', () => {
        EventWrapper.setState({ collapsed: true })
        expect(EventWrapper.find('.more-details')).toHaveLength(0);
    })
});

