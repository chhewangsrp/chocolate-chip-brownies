import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'
class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <h1> Google Maps API + React </h1> 
     <MapContainer google={this.props.google} />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDwanhWM9TOLgIahbB40OllN4TGKHT5S3M',
})(App)