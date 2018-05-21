import React, { Component } from 'react';
//import './App.css';
import 'bootstrap';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'
import AddLocation from './AddLocation';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import logo from "./Logo1.png"
import SearchBox from './SearchBox';

class App extends React.Component {
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
        console.log(this.state.locations.lat);
    }


  render() {
    return (

      <div>
      <div >
        
     
     {/* <AddLocation addToMaps={this.addToMaps}/> */}

      </div>

      
      <BrowserRouter>

       <div className = "container form"> 
       <SearchBox addToMaps={this.addToMaps}/>

        <nav className="navbar navbar-expand-lg ">  
                <ul className="navbar-nav">
                  <li className= "nav-item">
                    <img className= "logo" src={logo}/> 
                  </li>
                    <li className="nav-item">
                        <NavLink to={"/"} className="nav-link" href="#">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">How it works</a>
                    </li>
          <li className = "nav-item">
            <NavLink to={"/Login"} className="nav-link" href = "#"> Login </NavLink>
          </li>
        </ul>
      </nav>
        
         <Route exact path ="/" render = {()=><MapContainer google={this.props.google} locations={this.state.locations} />} />                 
                
    </div>

    </BrowserRouter>
    </div>

    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDwanhWM9TOLgIahbB40OllN4TGKHT5S3M',
})(App)