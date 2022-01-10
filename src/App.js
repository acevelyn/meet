// src/App.js

import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WarningAlert} from './Alert';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
    showWelcomeScreen: undefined
    }
  
    async componentDidMount() {
      this.mounted = true;
      const accessToken = localStorage.getItem('access_token');
      const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
            }
         });
        }
      }
  
    componentWillUnmount() {
       this.mounted = false;
    }


  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events : 
      events.filter((event)=> event.location === location);
      this.setState({ 
        events: locationEvents.slice(0, this.state.numberOfEvents),
        currentLocation: location
      })
    });
    }

    updateNumberOfEvents = (number) => {
      const newNum = number;
      this.setState({
        numberOfEvents: newNum
      });
      this.updateEvents(this.state.currentLocation);
    }

    getData = () => {
      const { locations, events } = this.state;
      const data = locations.map((location) => {
        const number = events.filter((event) => event.location === location)
          .length;
        const city = location.split(" ").shift();
        return { city, number };
      });
      return data;
    };


  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App"/>
    
    return (
      <div className="App">
        <div className="App-Header">
          <h1 className="title">Ev's Meet App</h1>
          <p className="header">Your go-to app for events near you!</p>
        </div>

        { !navigator.onLine ? (<WarningAlert text='You are offline, data is not up to date' />) : (<WarningAlert text=' ' />)}
        

        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
          />

        <NumberOfEvents 
          numberOfEvents={this.state.numberOfEvents} 
          updateNumberOfEvents={this.updateNumberOfEvents} 
         />
      <div className="data-visual">
        <h3>Events in Each City</h3>

        <ScatterChart
          width={800}
          height={400}
          margin={{ top: 20, right: 20, bottom: 20, left: 20,}} >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
      </div>

        <EventList events={this.state.events} />
        
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} 
        getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
