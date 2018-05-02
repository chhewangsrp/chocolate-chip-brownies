import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./Logo1.png"
import './index.css'
import api from "./api"



class NavBar extends React.Component 
{
	constructor(props) {
		super(props);
		this.state = {
			Neighborhood: []
		}

	}	

	componentWillMount() {
		api.getNeighborhood().then((res) => {
			this.setState({
				Neighborhood: res.Neighborhood 
			})
		});
	}



	render() {
		console.log(this.state);
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
                    
                    
                </ul>
            </nav>
            <div className="content">
            </div>
        </div>
    );
}

}

export default NavBar;