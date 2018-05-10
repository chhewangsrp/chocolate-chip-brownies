import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./Logo1.png"
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './index.css'
import Home from './Home';

class Main extends React.Component 
{
	constructor(props) {
		super(props);
		this.state = {
			Neighborhood: []
		}

	}	

	componentDidMount() {
		axios.get(`https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD`)
      .then(res => {
        const Neighborhoods = res.data.data;

        this.setState({ Neighborhood: Neighborhoods });

        console.log("this is data ", res);
      }).catch(err=>{
      		console.log("Error Occured Fetching: ",err);
      });
	}



	render() {

		const dropDownMenu = this.state.Neighborhood.map((neighborhood, index)=> 
		<option key={index}>	
			{neighborhood[10]} 
 		 </option> )
		
    return (
    	
    	<BrowserRouter>

       <div className = "container form"> 
       

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
        <div className="dropdown">
                	<select className="cityName">
                		<option className="Selected"> Choose a city </option>
                		{dropDownMenu}
                	</select>
   		</div>
   				</li>
   				<li className = "nav-item">
   					<NavLink to={"/Login"} className="nav-link" href = "#"> Login </NavLink>
   				</li>
   			</ul>
			</nav>
				
				  <div className="content">
                        <Route exact path ="/" render = {()=> <Home/>} />
                       {/* <Route exact path="/Login" render={() => <Login users = {this.state.users}/>} />*/}
                 </div>  
		</div>

		</BrowserRouter>
	

		);

	}
}

export default Main;
