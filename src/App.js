// src/App.js

import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';

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
  

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all' || !location) ?
      events : 
      events.filter((event)=> event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents)
      })
    });
    }

    updateNumberOfEvents = (number) => {
      const newNum = number;
      this.setState({
        numberOfEvents: newNum
      });
      this.updateEvents(this.state.locations);
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
          updateNumberOfEvents={this.updateNumberOfEvents} />

        <EventList events={this.state.events} />
        
      </div>
    );
  }
}

export default App;
