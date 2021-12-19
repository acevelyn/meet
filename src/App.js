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
    if (location) {
      getEvents().then((res) => {
        const locationEvents = (location === 'all') ?
          events : events.filter((event)=> event.location === location);
           this.setState({
            events: locationEvents.slice(0, this.state.numberOfEvents)
          }) // end of setState
      });
    } else {
      
          this.setState({
            events: locationEvents.slice(0, eventCount),
            numberOfEvents: eventCount,
            locations: res.locations
          })
      }
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
          updateEvents={this.updateEvents} 
          />

        <EventList events={this.state.events} />
        
      </div>
    );
  }
}

export default App;
