Feature: Specify Number of events 

Scenario: User can see 32 events by default if no number of events specified
Given the user has not specified a number of events to show
When the app is open
Then the user should see 32 events listed by default

Scenario: User can change the number of events being shown
Given the list of events are loaded on the app
When the user specifies a number
Then the user should only see that specified number of events