import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    })
    test('render NumberOfEvents Element', () => {
        expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
    })
    test('render text input correctly', () => {
        expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
    })
    test('change state when text input changes', () => {
        const eventObject = { target: { value: 1 }};
        NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(1);
    })
});