import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./Logo1.png"
import './index.css'



class NavBar extends React.Component 
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
		<option>	
			{neighborhood[10]} 
 		 </option> )
		
    return (
        <div className="container">

        	 <nav className="navbar navbar-expand-lg ">	
                <ul className="navbar-nav">

                	<li className= "nav-item">
                		<img className= "logo" src={logo}/> 
                	</li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">How it works</a>
                    </li>
               <li>      
                <div className="dropdown">
                	<select className="cityName">
                		<option className="Selected"> Choose a city </option>
                		{dropDownMenu}
                	</select>
   				</div>
				</li>	
                    
                </ul>
            </nav>
         
        </div>
    );
}

}

export default NavBar;