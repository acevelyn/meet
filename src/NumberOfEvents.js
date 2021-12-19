import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    }

    handleEventNumChange = (event) => {
        const value = event.target.value;
        this.setState({ numberOfEvents: value })
        this.props.updateEvents(null, value)
    } // end of handleEventNumChange function

    render(){
        return (
        <div className="NumberOfEvents">
            <h3>Number Of Events: </h3>
            <input 
                type="text"
                name="number"
                className="number-input"
                value={this.state.numberOfEvents}
                onChange={(e) => this.handleEventNumChange(e)}/>
        </div>
        )
    }
}
export default NumberOfEvents;