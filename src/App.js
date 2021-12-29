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
    const accessToken = localStorage.getItem('access_token');
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ 
        events, 
        locations: extractLocations(events) });
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
        <div className="App-Header">
          <h1 className="title">Ev's Meet App</h1>
        </div>
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
          />

        <NumberOfEvents 
          numberOfEvents={this.state.numberOfEvents} 
          updateNumberOfEvents={this.updateNumberOfEvents} 
         />

        <EventList events={this.state.events} />
        
      </div>
    );
  }
}

export default App;
