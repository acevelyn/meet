# Meet App
This Meet application is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events that will allow users to filter events by city, show/hide event details, specify number of events, use the app offline, and view a chart showing the number of upcoming events by city. 


## Feature 1: Filter Events by City
As a user, I should be able to filter events by city so that I can see the list of events that take place in that city. 

- Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.
- Scenario 2: User should see a list of suggestions when they search for a city.
- Scenario 3: User can select a city from the suggested list.

Given the user was typing in "Berlin" in the city textbox And the list of suggested cities is showing, when the user selects a city (e.g., "Berlin, Germany") from the list, then their city should be changed to that city (i.e., "Berlin, Germany") & the user should recieve a list of upcoming events in that city. 


## Feature 2: Show/Hide An Event's Details
As a user, I should be able to show and hide event details so that I can only see more details of events I am interested in and hide details for events I am not.
(As a user, I would like to be able to show/hide events details so that I can see more/less information about an event.)

- Scenario 1: An event element is collapsed by default.
- Scenario 2: User can expand an event to see its details.
- Scenario 3: User can collapse an event to hide its details.

Given the list of events have been loaded, when the user clicks on the "Show Details" button for an event, then the event element will be expanded to show the event details. 


## Feature 3: Specify Number of Events
As a user, I should be able to specify number of events shown to me so that I can limit or increase the amount of events I see based on my preference. 
(As a user, I would to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.)

- Scenario 1: When a user hasn't specified a number, 32 is the default number.
- Scenario 2: User can change the number of events they want to see.

Given the main page is open, when the user specifies a number of events to show shown, then the suggested number of events will then be displayed on the main page. 


## Feature 4: Use the App Offline
As a user, I should be able to use the app offline so that I can always have access to the app when I want to at anytime or place.
(As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.) 
- Scenario 1: Show cached data when there is no interent connection.
- Scenario 2: Show error when user changes the settings (city, time, and range)

Given the user is offline and/or doesn't have interent connection, when the user goes on the app, then the user is still able to access the app and it's functionalities without any issues. 


## Feature 5: Data Visualization
As a user, I should be able to have access to data of upcoming events so that I can see the number of upcoming events in each city.
(As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.)

- Scenario 1: Show a chart with the number of upcomong events in each city.

Given the user is on the app, when the user requests for access to upcoming events, the user will be able to see the number of upcoming events in each city. 

### Tech Stack
- React
- Node/npm




