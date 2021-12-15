// src/App.js

import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
    
  }
  
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
     this.mounted = false;
  }
  
  /* 
  NumberOfEvents - where user will input a number

  EventList - the number of events listed will change based on NumberOfEvents

  App - where NumberOfEvents and EventList will be rendered, this component will recieve an
  an onChange event from NumberOfEvents where the user selects a number of events
  
  if no location or "all" have it show all event locations, then gets a list and passes 
  it through EventList 
  
  */

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all' || !location) ?
      events : 
      events.filter((event)=> event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents)
      })
      if (eventCount) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          numberOfEvents: eventCount
        })
      }

      // if (!eventCount) {
      //   this.setState({ 
      //     events: locationEvents.slice(0, this.state.numberOfEvents),
      //     locationEvents
      //   })
      // }
      // this.setState({ 
      //   events: locationEvents,
      //   numberOfEvents: eventCount,
      //   locationEvents
      // })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Ev's Meet App</h1>
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents} />
        <NumberOfEvents 
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents} />

        <EventList events={this.state.events} />
        
      </div>
    );
  }
}

export default App;
