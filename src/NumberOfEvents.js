import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numOfEvents: 32
    }

    handleEventNumChange = (event) => {
        const value = event.target.value;
        this.setState({ numOfEvents: value })
    } // end of handleEventNumChange function

    render(){
        const { numOfEvents } = this.state.numOfEvents;
        return (
        <div className="NumberOfEvents">
            <h3>Number Of Events: </h3>
            <input 
                type="text"
                name="number"
                className="number-input"
                value={this.state.numOfEvents}
                onChange={this.handleEventNumChange}/>
        </div>
        )
    }
}
export default NumberOfEvents;