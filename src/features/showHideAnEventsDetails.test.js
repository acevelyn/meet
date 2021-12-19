import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import Event from '../Event'

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, and, when, then }) => {
        let AppWrapper;
    	given('the main app is open', () => {
            AppWrapper = mount(<App/>);
    	});

    	and('the list of events has been loaded on the app', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event').hostNodes()).toHaveLength(mockData.length);
    	});

    	when('the user has not yet clicked on the Show details button', () => {
        });

    	then('the user should not see more event details', () => {
            expect(AppWrapper.find('.more-details')).toHaveLength(0);
    	});
    });

    test('User can expand an event to see its details', ({ given, and, when, then }) => {
    	let AppWrapper;
        given('the main page is open', () => {
            AppWrapper = mount(<App/>);
    	});

    	and('list of events has been loaded on the app', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event').hostNodes()).toHaveLength(mockData.length);
    	});

    	when('the user clicks on the Show details button', () => {
            AppWrapper.find('.toggleEvent').at(0).simulate('click');
    	});

    	then('the user should see more event details', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.more-details')).toHaveLength(1);
    	});
    });

    test('User can collapse an event to hide its details.', ({ given, and, when, then }) => {
    	let AppWrapper;
        given('the list of events have been loaded on the app', () => {
            AppWrapper = mount(<App/>);
    	});

    	and('the extra event details are showing', () => {
            AppWrapper.update()
            AppWrapper.find('.toggleEvent').at(0).simulate('click');
            expect(AppWrapper.find('.more-details')).toHaveLength(1);
    	});

    	when('the user clicks on the Hide Details button', () => {
            AppWrapper.find('.toggleEvent').at(0).simulate('click');
    	});

    	then('the user should not show extra event details anymore', () => {
            expect(AppWrapper.find('.more-details')).toHaveLength(0);
    	});
    });

});