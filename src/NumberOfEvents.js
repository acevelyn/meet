import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        errorInfo: null
    }


    handleEventNumChange = (event) => {
        const number = event.target.value;
        if (number < 0 || number > 32) {
            this.setState({
                errorInfo: 'Please choose a number between 1 and 32'
            })
        } else {
            this.setState({
                numberOfEvents: number,
                errorInfo: ''
            })
        };
        this.props.updateNumberOfEvents(number);
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
                <ErrorAlert text={this.state.errorInfo}/>
        </div>
        )
    }
}
export default NumberOfEvents;