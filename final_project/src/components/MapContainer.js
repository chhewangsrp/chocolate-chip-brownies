import React from 'react'
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import SearchBox from './SearchBox';
import './index.css'
import customMarker from "./Marker.png"


class MapContainer extends React.Component {

  // ======================
  // ADD LOCATIONS TO STATE
  // ======================

  constructor (props){
  super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

  this.onMarkerClick = this.onMarkerClick.bind(this); 

}


  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
        this.setState({lat: position.coords.latitude, lng: position.coords.longitude});
      },

      (error) => {alert("there was an error getting location")},

      {enableHighAccuracy: true}

      ); 
  
  }  

  componentDidMount() {
    this.loadMap(); // call loadMap function to load the google map
  }
  


  loadMap() {

    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const { google } = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props
      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node
      
    }
  }

 
 onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  }

  render() {
    console.log(this.state);
    const style = {
         width: '100vw',
        height: '95vh'
      }


    return (
      
     <div style = {style}>
      <Map 
        google={this.props.google}
        style = {style}
        initialCenter={{ lat: 40.8196311, lng: -73.9505155 }}
        zoom={15} centerAroundLocation={true} className = "container form">


        {this.props.locations.map( (location,index) => {
          return (
            
            <Marker key={index}
              icon={{
                 url: customMarker
              }}
                name = {location.time}
                onClick = {this.onMarkerClick}
                position={{
                lat: location.lat, lng: location.lng
              }}
            />
             
          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <p>This parking is available from: </p>
              <h1>{this.state.selectedPlace.name}</h1>

            </div>
        </InfoWindow>
      </Map>
    </div>  
    
    );
  }
}

export default MapContainer;