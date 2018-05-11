import React, { Component } from 'react';
import './index.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'



class App extends Component {
  render() {
    return (
      <div className = "map-container"> 
     <MapContainer google={this.props.google} />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBtURheoW9ZUBKpEQakgUw-MZUcOlYF1OM',
})(App)