// src/App.js

import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
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
  

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all' || !location) ?
      events : 
      events.filter((event)=> event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents)
      })
    });
    // NUMBER OF EVENTS INPUT CHANGE ATTEMPT
    // if (eventCount){
    //   this.setState({
    //     events: this.state.locations.slice(0, eventCount),
    //     numberOfEvents: eventCount,
    //     locations: this.state.locations
    //   })
    // }
    }



  render() {
    return (
      <div className="App">
        <h1>Ev's Meet App</h1>
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
          />

        <NumberOfEvents 
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents} 
        />

        <EventList events={this.state.events} />
        
      </div>
    );
  }
}

export default App;
