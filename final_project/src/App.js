import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'
import AddLocation from './AddLocation';
import base from './base';

class App extends Component {
  constructor(props) 
	{
        super(props);
        this.state = {
            locations: [] ,

        };

        this.addToMaps = this.addToMaps.bind(this);
       
    }

    addToMaps(location) {
        
        const locations = this.state.locations.concat(location);
        this.setState({
           locations: locations,
        });
        
    }


  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <h1> Google Maps API + React </h1> 
        <AddLocation addToMaps={this.addToMaps}/>
     <MapContainer google={this.props.google} locations={this.state.locations} />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDwanhWM9TOLgIahbB40OllN4TGKHT5S3M',
})(App)