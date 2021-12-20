import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    }


    handleEventNumChange = (event) => {
        const number = event.target.value;
        this.setState({ 
            numberOfEvents: number 
        });
        // this.props. updateNumberOfEvents(number);
    } // end of handleEventNumChange function

    render(){
        return (
        <div className="NumberOfEvents">
            <h3>Number Of Events: </h3>
            <input 
                type="number"
                className="number-input"
                value={this.state.numberOfEvents}
                onChange={(e) => this.handleEventNumChange(e)}/>
        </div>
        )
    }
}
export default NumberOfEvents;