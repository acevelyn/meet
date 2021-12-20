import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumOfEvents.feature');

defineFeature(feature, test => {
    test('User can see 32 events by default if no number of events specified', 
    ({ given, when, then }) => {
        let AppWrapper;
        let NumberOfEventsWrapper;
    	given('the main page is open', () => {
            AppWrapper = shallow(<App/>)
    	});

    	when('the user has not specified a number of events to be shown', () => {
    	});

    	then('the user should see 32 events listed by default', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    	});
    });

    test('User can change the number of events being shown', 
    ({ given, when, then }) => {
        let AppWrapper;
        let NumberOfEventsWrapper;

    	given('the main page is open', () => {
            AppWrapper = shallow(<App/>)
    	});

    	when('the user specifies a number of events to be shown', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />)
            NumberOfEventsWrapper.setState({ numberOfEvents: 16 })
    	});

    	then('the user should only see that specified number of events', () => {
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(16)
    	});
    });

})