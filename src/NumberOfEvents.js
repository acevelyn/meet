import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    };

    handleEventNumChange = (event) => {
        const value = event.target.value;
        this.props.updateEvents(null, value)
        this.setState({ numberOfEvents: value })
    } // end of handleEventNumChange function

    render(){
        const { numberOfEvents } = this.state;
        return (
        <div className="NumberOfEvents">
            <h3>Number Of Events: </h3>
            <input 
                type="text"
                name="number"
                className="number-input"
                value={numberOfEvents}
                onChange={this.handleEventNumChange}/>
        </div>
        )
    }
}
export default NumberOfEvents;