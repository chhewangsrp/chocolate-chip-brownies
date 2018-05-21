import React from "react";
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';



class SearchBox extends React.Component 
{
	constructor(props)
	{
		super(props);
		this.state = {
			address: ''
		}
	}

	componentDidMount() 
	{
		var addScript = document.createElement('script');
  		addScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBtURheoW9ZUBKpEQakgUw-MZUcOlYF1OM&libraries=places');
  		document.body.appendChild(addScript);
	}

	handleChange = (address) => {
    this.setState({ address })
  	}


  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }


	render () {

		return(	
			<div>
			<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtURheoW9ZUBKpEQakgUw-MZUcOlYF1OM&libraries=places">
			</script>

			<PlacesAutocomplete
        		value={this.state.address}
        		onChange={this.handleChange}
        		onSelect={this.handleSelect}
			>
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div ref="map">
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
		);
	}
}

export default SearchBox;