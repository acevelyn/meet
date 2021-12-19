
Feature: Show/Hide An Events Details

Scenario: An event element is collapsed by default
Given the main app is open
And the list of events has been loaded on the app
When the user has not yet clicked on the Show details button
Then the user should not see more event details 

Scenario: User can expand an event to see its details
Given the main page is open
And list of events has been loaded on the app
When the user clicks on the Show details button
Then the user should see more event details

Scenario: User can collapse an event to hide its details.
Given the list of events have been loaded on the app
And the extra event details are showing
When the user clicks on the Hide Details button
Then the user should not show extra event details anymore