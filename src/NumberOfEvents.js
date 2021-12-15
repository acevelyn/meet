import React, { Component } from 'react';

class NumberOfEvents extends Component {
    

    handleEventNumChange = (event) => {
        const value = event.target.value;
        this.setState({ numOfEvents: value })
    } // end of handleEventNumChange function

    render(){
        return (
        <div className="NumberOfEvents">
            <h3>Number Of Events: </h3>
            <input 
                type="text"
                name="number"
                className="number-input"
                value={this.props.numberOfEvents}
                onChange={this.handleEventNumChange}/>
        </div>
        )
    }
}
export default NumberOfEvents;