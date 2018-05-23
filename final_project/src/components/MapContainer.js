import React from 'react'
import { Map, InfoWindow, Marker } from 'google-maps-react';
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

    const style = {
         width: '100vw',
        height: '97vh'
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
                title = {location.address}
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
              <h6>This parking is available from: </h6>
              <h6>{this.state.selectedPlace.name}</h6>
              <h6> Location:</h6>
              <h6>{this.state.selectedPlace.title} </h6>

            </div>
        </InfoWindow>
      </Map>
    </div>  
    
    );
  }
}

export default MapContainer;