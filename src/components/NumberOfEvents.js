import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        infoText: ''
    }


    handleEventNumChange = (event) => {
        const number = event.target.value;
        if (number < 0 || number > 32) {
            this.setState({
                infoText: 'Please choose a number between 1 and 32'
            })
        } else {
            this.setState({
                numberOfEvents: number,
                infoText: ''
            })
        };
        this.props.updateNumberOfEvents(number);
    } // end of handleEventNumChange function

    render(){
        return (
        <div className="NumberOfEvents">
            <div className="Error-Alert">
                <ErrorAlert text={this.state.infoText} />
            </div>
            <h4>Number Of Events:</h4>
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