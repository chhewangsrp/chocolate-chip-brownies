import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import 'bootstrap';
import './index.css';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { address: '',  
                   time: new Date(),
                   lat: '',
                   lng: ''
                 }
  
        this.handleClick = this.handleClick.bind(this);
  }


  handleChange = (address) => {
    this.setState({ address })

  }

  handleSelect = (address) => {

    const date = new Date().toLocaleTimeString();
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({lat: latLng.lat, lng: latLng.lng, time: date}))
      .catch(error => console.error('Error', error))
  
  }

  handleClick (e) {

    e.preventDefault();
    this.setState({address: ''})
    this.props.addToMaps(this.state)
  }

  render() {


    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div className = "box-container">

            <div className = "quote">
              <h3>"A true friend is known in time of NEED"</h3>
            </div>

            <div className = "input-box">

                <input
                  {...getInputProps({
                    placeholder: 'Enter a location',
                    className: 'col-sm-10'
                  })}
                />

            

            <button onClick = {this.handleClick} className = "btn-primary ADD" > Add </button>


            </div>
            
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' ,width: '25vw', marginLeft: '30' };
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

    );
  }

}

export default LocationSearchInput;