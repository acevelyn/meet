// src/Event.js
import React, { Component } from 'react';

class Event extends Component {
    state = {
        collapsed: true,
    }

    handleButtonClick = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render(){
        const { event } = this.props;
        const { collapsed } = this.state;
        return (
        <div className="Event">
            <h2 className="summary">{event.summary}</h2>
            <p className="location">{event.location}</p>

            {this.state.collapsed === false && (
                <div className="more-details">
                 <p className="start-date">
                     <label>Date: </label>
                     {event.start.dateTime}
                </p>
                 <p className="event-description">
                    <label>Event Details: </label>
                     {event.description}
                </p>
                 <button 
                    className="toggleEvent"
                    onClick={this.handleButtonClick}>
                        Hide Details
                </button>
                 </div>
            )}
            {this.state.collapsed === true && (
                <button 
                 className="toggleEvent"
                 onClick={this.handleButtonClick}>
                     Show Details
             </button>
            )}
        </div>
        )
    }
}
export default Event;

// make a component called EventDetails?