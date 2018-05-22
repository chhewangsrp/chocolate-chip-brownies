import React from 'react'
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import SearchBox from './SearchBox';
import './index.css'


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
  componentDidMount() {
    this.loadMap(); // call loadMap function to load the google map
  }



  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const { google } = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: { lat: 40.7485722, lng: -74.0068633 }, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      /*this.map = new maps.Map(node);*/ // creates a new Google map on the specified node (ref='map') with the specified configuration set above.


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

    return (
     
      <Map google={this.props.google}
        initialCenter={{ lat: 40.7485722, lng: -74.0068633 }}
        zoom={11} className = "container form">


        {this.props.locations.map( (location,index) => {
          return (
            
            <Marker key={index}
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
     
    );
  }
}

export default MapContainer;