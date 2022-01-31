// src/CitySearch.js

import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined,
        infoText: null
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'City Not Found. Please try another city',
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                infoText: ''
            });
        }
    }; // end of handleInputChanged function


    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false,
            infoText: ''
        });
        this.props.updateEvents(suggestion);
    }; // end of handleItemClicked function

    render() {
        return (
            <div className="CitySearch">
                {/* <div className="Info-Alert"> */}
                    <InfoAlert text={this.state.infoText} />
                {/* </div> */}
                <div className="CitySearch-Input">
                    <h4>City Search:</h4>
                    <input 
                        type="text" 
                        className="city"
                        placeholder="Search for a city"
                        value={this.state.query}
                        onChange={this.handleInputChanged}
                        onFocus={() => {this.setState({ showSuggestions: true })}}
                        />
                <ul className="suggestions" style={this.state.showSuggestions? {}: { display: 'none'}}>
                {this.state.suggestions.map((suggestion) => (
                    <li 
                        key={suggestion}
                        onClick={() => this.handleItemClicked(suggestion)}
                    >{suggestion}</li>
                ))}
                {/* key all supposed to be here? */}
                <li onClick={() => this.handleItemClicked('all')}> 
                    <b>See all cities</b>
                </li>
                </ul>
                </div>
            </div>
        );
    }
}

export default CitySearch;