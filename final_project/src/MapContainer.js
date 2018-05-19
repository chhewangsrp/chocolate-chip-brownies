import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
<<<<<<< HEAD
=======

>>>>>>> 26062bbb2c2630f0f383623f5d094fce9c280bdd

class MapContainer extends Component {

  // ======================
  // ADD LOCATIONS TO STATE
  // ======================
  state = {
    locations: [
      { name: "New York County Supreme Court", location: { lat: 40.7143033, lng: -74.0036919 } },
      { name: "Queens County Supreme Court", location: { lat: 40.7046946, lng: -73.8091145 } },
      { name: "Kings County Supreme Court", location: { lat: 40.6940226, lng: -73.9890967 } },
      { name: "Richmond County Supreme Court", location: { lat: 40.6412336, lng: -74.0768597 } },
      { name: "Bronx Supreme Court", location: { lat: 40.8262388, lng: -73.9235238 } }
    ]
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

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

      // ==================
      // ADD MARKERS TO MAP
      // ==================


      this.state.locations.forEach(location => { // iterate through locations saved in state
        const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: { lat: location.location.lat, lng: location.location.lng }, // sets position of marker to specified location
          map: this.map, // sets markers to appear on the map we just created on line 35
          //title: location.name // the title of the marker is set to the name of the location
        });
      })





    }
  }

  render() {
    return (
      <Map google={this.props.google}
        initialCenter={{lat: 40.7485722, lng: -74.0068633}}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={11}>

        {this.state.locations.map((location) => {
          return (
            <Marker
              title={location.name}
              name={location.name}
              position={location.location}
            />
          );
        })}
      </Map>
    );
  }
}

export default MapContainer;